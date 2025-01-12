'use client'

import { Button, FileButton } from '@mantine/core'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { useCallback } from 'react'

export const UploadButton = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result) => {
      onChange(result.info.secure_url)
    },
    [onChange]
  )

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      options={{ maxFiles: 1 }}
      showPoweredBy={false}
      cropping={true}
    >
      {({ open }) => {
        return (
          <>
            <Button
              className="button button-upload"
              onClick={() => open?.apply()}
            >
              Select image
            </Button>
          </>
        )
      }}
    </CldUploadWidget>
  )
}
