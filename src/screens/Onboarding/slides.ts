import { ImageSourcePropType } from 'react-native'

export interface SlideProps {
  id: string
  title: string
  subTitle: string
  imageUrl: ImageSourcePropType
}

export const slides = [
  {
    id: '1',
    title: 'Comece hoje e torne-se um expert em UI Design',
    subTitle: `São mais de 20 cursos para\nvocê assistir quando quiser`,
    imageUrl: require('../../assets/image_onboarding1.png'),
  },
  {
    id: '2',
    title: 'Aprenda a criar interfaces incríveis do absoluto zero',
    subTitle: `Na ui.academy você não precisa\nter experiência na área.`,
    imageUrl: require('../../assets/image_onboarding2.png'),
  },
]
