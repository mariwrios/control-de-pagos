import React from 'react'
import ProfileHeader from './ProfileHeader'
import { PaymentsList } from '../payment/PaymentsList'
import { UiModal } from '../ui/UiModal'

export const Profile = () => {
  return (
    <div>
      <UiModal/>
      <ProfileHeader />
      <PaymentsList/>
    </div>
  )
}
