import React, { useState } from 'react';
import { useShow, useHide } from 'remax';
import { View, Text, Image } from 'remax/wechat';
import Api from '@/Services/repos'
import ReposList from '@/Components/ReposList';
// import styles from './index.module.css';


export default () => {
  const [list, setList] = useState([])

  useShow(() => { Api.getRepos().then(setList) });

  useHide(() => {
    console.log('onHide');
  });

  return (
    <View>
      <ReposList data={list}/>
    </View>
  );
};


