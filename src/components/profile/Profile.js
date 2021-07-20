import React from 'react'
import ProfileHeader from './ProfileHeader'
import { PaymentsList } from '../payment/PaymentsList'
import { PaymentModal } from '../payment/PaymentModal'

export const Profile = () => {
  return (
    <div>
      <PaymentModal/>
      <ProfileHeader />
      <PaymentsList/>
    </div>
  )
}
