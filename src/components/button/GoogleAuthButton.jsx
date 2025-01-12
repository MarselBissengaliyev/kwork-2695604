import { signIn } from 'next-auth/react'

import { PiGoogleLogoBold } from 'react-icons/pi'
import { Button } from '@mantine/core'

export const GoogleAuthButton = () => {
  return (
    <Button
      className="button button-secondary tw-w-full tw-flex tw-flex-row tw-gap-4 tw-justify-center tw-items-center"
      onClick={() =>
        signIn('google', {
          callbackUrl: '/',
        })
      }
    >
      <div className="tw-flex tw-flex-row tw-gap-2 tw-items-center tw-justify-center">
        <PiGoogleLogoBold size={20} />
        <span>Continue with Google</span>
      </div>
    </Button>
  )
}
