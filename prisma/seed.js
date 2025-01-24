const bcrypt = require('bcrypt')
const { faker } = require('@faker-js/faker')
const { PrismaClient } = require('@prisma/client')
const { default: slugify } = require('slugify')

const prisma = new PrismaClient()

const random = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a
const hash = (password) => bcrypt.hashSync(password, 12)
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function main() {
  const count = {
    user: 2,
    listing: 20,
    country: 1,
    city: 2,
    category: 4,
    blog_posts: 1,
  }

  // creating users
  console.log('users: creating')

  const email = 'root@domain.com'
  const password = hash('12345678')

  const users = await prisma.user.createMany({
    data: [
      { email, role: 'ADMIN', balance: 10000 },
      ...Array.from({ length: count.user - 1 }).map(() => ({
        email: faker.internet.email().toLowerCase(),
        role: 'USER',
        balance: 5000,
      })),
    ].map(({ email, role, balance }) => ({
      email,
      password,
      role,
      name: faker.person.fullName(),
      email_verified: true,
      balance,
    })),
    skipDuplicates: true,
  })

  console.log('users: done')

  const admin = await prisma.user.findFirst({ where: { email } })

  // creating region configurations

  // Создаем транзакции для первого пользователя
  console.log('transactions: creating')

  const transactions = [
    {
      balance: 10000,
      status: 'PAID',
      user_id: admin.id,
    },
    {
      balance: 3000,
      status: 'PAID',
      user_id: admin.id,
    },
    {
      balance: -5000,
      status: 'REQUEST_A_REFUND',
      user_id: admin.id,
    },
  ]

  await prisma.transaction.createMany({
    data: transactions,
  })

  console.log('transactions: done')

  console.log('region_configurations: creating')

  await prisma.regionConfiguration.createMany({
    data: [
      {
        slug: 'united-states',
        name: 'United States',
        locale: 'en',
        country_name: 'United States',
        country_code: 'us',
        domain: 'carvestor.com',
      },
      {
        slug: 'russia',
        name: 'Russia',
        locale: 'ru',
        country_name: 'Russia',
        country_code: 'ru',
        domain: 'rudomain.com',
      }
    ].map(({ slug, name, locale, country_code, country_name, domain }) => ({
      slug,
      name,
      locale,
      country_code,
      country_name,
      domain,
      seo_title: country_name,
      seo_description: country_name,
      seo_title_template: country_name,
      seo_description_template: country_name,
    })),
    skipDuplicates: true,
  })

  const regionConfigurations = await prisma.regionConfiguration.findMany()

  console.log('region_configurations: done')

  // creating countries
  console.log('countries: creating')
  await prisma.country.createMany({
    data: regionConfigurations.map(
      ({ id: region_config_id, slug, country_code, country_name }) => ({
        slug,
        name: country_name,
        code: country_code,
        region_config_id,
      })
    ),
    skipDuplicates: true,
  })

  const countries = await prisma.country.findMany()

  console.log('countries: done')

  // creating cities
  console.log('cities: creating')

  for await (const { id: country_id } of countries) {
    await sleep(500)

    await prisma.city.createMany({
      data: Array.from({ length: count.city }).map(() => {
        const name = `${faker.location.city()} ${faker.string.nanoid(6)}`
        const slug = slugify(name, {
          replacement: '-',
          lower: true,
          locale: 'en',
        })
        const picture = faker.image.urlLoremFlickr({
          width: 900,
          height: 600,
          category: 'nature',
        })
        const description = faker.lorem.paragraph({ min: 3, max: 5 })

        return {
          country_id,
          slug,
          name,
          picture,
          description,
          seo_title: name,
          seo_description: description,
        }
      }),
      skipDuplicates: true,
    })
  }

  const cities = await prisma.city.findMany()

  console.log('cities: done')

  // creating categories
  console.log('categories: creating')

  for await (const { id: country_id } of countries) {
    await sleep(500)

    await prisma.category.createMany({
      data: Array.from({ length: count.category }).map(() => {
        const name = `${faker.commerce.department()} ${faker.string.nanoid(6)}`
        const slug = slugify(name, {
          replacement: '-',
          lower: true,
          locale: 'en',
        })
        const picture = faker.image.urlLoremFlickr({
          width: 900,
          height: 600,
          category: 'nature',
        })
        const description = faker.lorem.paragraph({ min: 3, max: 5 })

        return {
          country_id,
          slug,
          name,
          picture,
          description,
          seo_title: name,
          seo_description: description,
        }
      }),
      skipDuplicates: true,
    })
  }

  const categories = await prisma.category.findMany()

  console.log('categories: done')

  console.log('makes: creating')

  // Создаем марки Audi и BMW
  const makes = await prisma.make.createMany({
    data: [
      { name: 'Audi' },
      { name: 'BMW' },
    ],
    skipDuplicates: true,
  })

  console.log('makes: done')

  const makeRecords = await prisma.make.findMany()

  console.log('models: creating')

  // Заполняем модели для Audi и BMW
  for await (const { id: make_id, name: makeName } of makeRecords) {
    await sleep(500)

    const models = makeName === 'Audi' ? ['A4', 'A6', 'Q5', 'Q7'] : ['X3', 'X5', '3 Series', '5 Series']

    for (const model of models) {
      await prisma.model.create({
        data: {
          name: model,
          make_id,
        },
      })
    }
  }

  const modelRecords = await prisma.model.findMany()

  console.log('models: done')

  console.log('marketInfo: creating')

  // Создаем мок-данные для MarketInfo
  for await (const { id: make_id, name: makeName } of makeRecords) {
    const relatedModels = modelRecords.filter((model) => model.make_id === make_id)

    for (const { id: model_id, name: modelName } of relatedModels) {
      await prisma.marketInfo.create({
        data: {
          make_id,
          model_id,
          year: faker.number.int({ min: 2000, max: 2023 }),
          region: faker.location.country(),
          min_price: faker.number.int({ min: 5000, max: 20000 }),
          max_price: faker.number.int({ min: 20000, max: 80000 }),
          avg_price: faker.number.int({ min: 15000, max: 60000 }),
          min_mileage: faker.number.int({ min: 1000, max: 50000 }),
          max_mileage: faker.number.int({ min: 50000, max: 200000 }),
          avg_mileage: faker.number.int({ min: 30000, max: 100000 }),
          listing_count: faker.number.int({ min: 1, max: 500 }),
        },
      })
    }
  }

  console.log('marketInfo: done')

  // creating listings
  console.log('listings: creating')

  const auctionValues = Object.values({
    IAAI: 'IAAI',
    COPART: 'COPART',
    OPENLANE: 'OPENLANE',
  });

  await prisma.listing.createMany({
    data: Array.from({ length: count.listing }).map(() => {
      const user_id = admin.id
      const country_id = random(1, 4)
      const city_id = random(1, count.city)

      const vin = faker.vehicle.vin()
      const make_id = random(1, 2)
      const model_id = random(1, 8)
      const year = faker.number.int({ min: 2000, max: 2023 })
      const mileage = faker.number.int({ min: 1000, max: 200000 })
      const damage = faker.lorem.sentence({ min: 3, max: 5 })
      const final_bid = faker.number.int({ min: 5000, max: 80000 })
      const makes = ["Copart", "IAAI"];
      const auction = auctionValues[Math.floor(Math.random() * auctionValues.length)];
      const loss = faker.lorem.sentence({ min: 3, max: 5 })
      const damageSecondary = faker.lorem.sentence({ min: 3, max: 5 })  
      const state = faker.location.state()
      const location = faker.location.city()
      const document = faker.lorem.sentence({ min: 3, max: 5 })
      const seller = faker.company.name()
      const color = faker.color.human()
      const engine = faker.lorem.sentence({ min: 3, max: 5 })
      const fuel = faker.lorem.sentence({ min: 3, max: 5 })
      const condition = faker.lorem.sentence({ min: 3, max: 5 })
      const transmission = faker.lorem.sentence({ min: 3, max: 5 })
      const drive = faker.lorem.sentence({ min: 3, max: 5 })
      const auction_at = faker.date.future()


      const title = `${faker.commerce.productName()} ${faker.string.nanoid(6)}`
      const slug = slugify(title, {
        replacement: '-',
        lower: true,
        locale: 'en',
      })
      const address = faker.location.streetAddress()
      const latitude = faker.location.latitude()
      const longitude = faker.location.longitude()
      const features = 'feature0,feature1,feature2'
      const picture = faker.image.urlLoremFlickr({
        width: 900,
        height: 600,
        category: 'nature',
      })
      const description = faker.lorem.paragraph({ min: 3, max: 5 })

      return {
        slug,
        title,
        description,
        picture,
        published: true,
        address,
        features,
        latitude,
        longitude,
        seo_title: title,
        seo_description: description,
        country_id,
        city_id,
        user_id,
        vin,
        make_id,
        model_id,
        year,
        mileage,
        damage,
        final_bid,
        auction,
        loss,
        damageSecondary,
        state,
        location,
        document,
        seller,
        color,
        engine,
        fuel,
        condition,
        transmission,
        drive,
        auction_at,
        
      }
    }),
    skipDuplicates: true,
  })

  const listings = await prisma.listing.findMany()

  // Создаем биды для первого пользователя
  console.log('bids: creating')

  if (listings.length < 10) {
    throw new Error('Not enough listings for creating bids. Seed at least 10 listings.')
  }

  const bids = listings.slice(0, 10).map((listing) => ({
    amount: random(100, 500),
    lot_id: listing.id,
    user_id: admin.id,
    status: 'CURRENT',
  }))

  await prisma.bid.createMany({
    data: bids,
  })

  console.log('bids: done')

  // for await (const { id: listing_id } of listings) {
  //   const category_id = random(1, count.category)

  //   await prisma.listingCategory.create({
  //     data: { listing_id, category_id },
  //   })
  // }

  console.log('listings: done')

  // creating blog posts
  console.log('blog_posts: creating')

  await prisma.blogPost.createMany({
    data: Array.from({ length: count.blog_posts }).map(() => {
      const user_id = admin.id

      const title = `${faker.lorem.sentence({ min: 4, max: 8 })} ${faker.string.nanoid(6)}`
      const slug = slugify(title, {
        replacement: '-',
        lower: true,
        locale: 'en',
      })
      const picture = faker.image.urlLoremFlickr({
        width: 900,
        height: 600,
        category: 'nature',
      })
      const content = faker.lorem.paragraphs({ min: 2, max: 5 })

      return {
        user_id,
        published: true,
        picture,
        slug,
        title,
        content,
        seo_title: title,
        seo_description: title,
      }
    }),
  })

  console.log('blog_posts: done')
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
