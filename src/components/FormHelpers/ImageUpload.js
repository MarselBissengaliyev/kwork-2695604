'use client'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { useCallback } from 'react'

let cloudinary

const uploadPreset = process.env.NEXT_CLOUDINARY_PRESET

const ImageUpload = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result) => {
      onChange(result.info.secure_url)
    },
    [onChange]
  )

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{ maxFiles: 1 }}
      showPoweredBy={false}
      cropping={true}
    >
      {({ open }) => {
        return (
          <>
            <div onClick={() => open?.apply()} className="img-thumbnail mb-3">
              <div className="text-center">Click to upload</div>
            </div>
            {value && (
              <div className="text-center position-relative mb-3">
                <Image src={value} alt="listings" width={500} height={100} />
              </div>
            )}
          </>
        )
      }}
    </CldUploadWidget>
  )
}

export default ImageUpload
