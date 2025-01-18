import { getBlogPostBySlug } from "@/actions/blog-posts";

import { BlogDetails } from "@/components/blog";
import PageBanner from "@/components/Common/PageBanner";
import PageDirect from "@/components/Common/PageDirect";
import css from "./page.module.scss";

export const generateMetadata = async ({ params }) => {
  const post_slug = params?.post_slug?.toLowerCase();

  const post = post_slug ? await getBlogPostBySlug(post_slug).catch(() => null) : null;

  return {
    title: post?.seo_title,
    description: post?.seo_description,
  };
};

const page = async ({ params }) => {
  const post_slug = params?.post_slug;

  const post = post_slug ? await getBlogPostBySlug(post_slug).catch(() => null) : null;

  return post ? (
    <>
      <div className={css.block} style={{ backgroundImage: `url(${post.picture})` }}
      >
        <div className={css.container + " tw-container"}>
          <PageDirect />
          <h1>911 GT3 with Manthey Kit <br /> Is Quicker at the 'Ring</h1> 
        </div>
      </div>
      <BlogDetails post={post} />
    </>
  ) : (
    <></>
  );
};

export default page;
