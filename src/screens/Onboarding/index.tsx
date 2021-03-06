/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar'
import React, { useRef, useState } from 'react'
import { Animated, FlatList } from 'react-native'

import { OnboardingItem } from './OnboardingItem'
import { slides } from './slides'
import { Paginator } from './Paginator'

import * as S from './styles'

export const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current
  const slidesRef = useRef(null)

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index)
  }).current

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 })
    } else {
      // Last item. Utilizar para ir ao SignIn e armazenar viewedOnboarding no async storage posteriormente
    }
  }

  return (
    <>
      <StatusBar style="light" />
      <S.Container>
        <S.Content>
          <FlatList
            data={slides}
            renderItem={({ item }) => (
              <OnboardingItem
                item={item}
                lastSlide={slides[slides.length - 1].id}
                scrollTo={scrollTo}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              },
            )}
            onScrollToIndexFailed={({ index, averageItemLength }) => {
              slidesRef.current?.scrollToOffset({
                offset: index * averageItemLength,
                animated: true,
              })
            }}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          />
        </S.Content>

        <S.WrapperDot>
          <Paginator item={slides} scrollX={scrollX} />
        </S.WrapperDot>
      </S.Container>
    </>
  )
}
