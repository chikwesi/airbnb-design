import { IconType } from 'react-icons'
import { IoBedOutline } from 'react-icons/io5'
import { MdOutlineHotel, MdOutlineShower } from 'react-icons/md'
import { CgUserList } from 'react-icons/cg'

export const services: { name: string; icon: IconType }[] = [
  { name: 'Kitchen', icon: CgUserList },
  { name: 'Private patio or balcony', icon: CgUserList },
  { name: 'Centrail air conditioning', icon: IoBedOutline },
  { name: 'Dedicated workspaces', icon: MdOutlineHotel },
  { name: 'Wifi', icon: IoBedOutline },
  { name: 'Heating', icon: MdOutlineHotel },
  { name: '55” 4k TV', icon: IoBedOutline },
  { name: '1 parking space', icon: MdOutlineHotel },
  { name: 'Security cameras', icon: IoBedOutline },
  { name: 'Free dryer - in unit', icon: MdOutlineShower },
  { name: 'Free washer - in unit', icon: MdOutlineShower },
  { name: 'Ceiling fans', icon: MdOutlineShower },
]

export const reviewsPollData: { name: string; rating: number }[] = [
  { name: 'Cleanliness', rating: 5 },
  { name: 'Accuracy', rating: 4.9 },
  { name: 'Communication', rating: 4.8 },
  { name: 'Location', rating: 4.8 },
  { name: 'Check-in', rating: 4.9 },
  { name: 'Value', rating: 4.2 },
]

export const reviews: { name: string; img: string; comment: string }[] = [
  {
    name: 'Steve',
    img: '/steve.webp',
    comment:
      "Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful views, horses, and nearby skiing. I'm so grateful.",
  },
  {
    name: 'Emily',
    img: '/emily.webp',
    comment:
      'The location was very quiet and peaceful. We loved the wood stove and the location was convenient, however the interior was not in the best shape.',
  },
  {
    name: 'Daniel',
    img: '/daniel.webp',
    comment:
      'Overall a decent stay. I appreciated having a kitchen and access to firewood for the stove which heated up the little cabin very effectively. ',
  },
  {
    name: 'Jackson',
    img: '/jackson.webp',
    comment:
      "Abbe's tiny house was a perfect spot to spend the weekend while skiing in the Tetons. The space was comfortable and the wood stove kept us very warm.",
  },
]
