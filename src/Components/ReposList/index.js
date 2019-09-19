import React, { memo } from 'react';
import { View, Text, ScrollView, Image, Icon } from 'remax/wechat';
import styles from './index.module.less';

const Item = ({ item }) => (
  <View className={styles.listItem}>
    <View className={styles.header}>
      <View className={styles.header_left}>
        <Image src={item.owner.avatar_url} />
        <Text>{item.owner.login}</Text>
      </View>
      <View>
        {item.language}
      </View>
    </View>
    <View className={styles.description}>{item.description ? item.description : 'No description provided'}</View>
    <View className={styles.footer}>
      <Text>☆ {item.stargazers_count}</Text>
      <Text>1️⃣ {item.open_issues}</Text>
      <Text>Forks {item.forks}</Text>
    </View>
  </View>
)

const ReposList = ({ data }) => {
  if (!data) {
    return null
  }

  return (
    <ScrollView
      scrollY={true}
    >
      {
        data.map(item => <Item item={item} key={item.id}/>)
      }
    </ScrollView>
  )
}

export default memo(ReposList)