/**
 * Copyright (c) OpenSpug Organization. https://github.com/openspug/spug
 * Copyright (c) <spug.dev@gmail.com>
 * Released under the AGPL-3.0 License.
 */
import React from 'react';
import { Layout } from 'antd';
import { CopyrightOutlined, GithubOutlined } from '@ant-design/icons';
import styles from './layout.module.less';


export default function () {
  return (
    <Layout.Footer style={{padding: 0}}>
      <div className={styles.footer}>
        <div className={styles.links}>
          <a className={styles.item} title="官网" href="http://www.huansi.net/" target="_blank"
             rel="noopener noreferrer">官网</a>
        </div>
        <div style={{color: 'rgba(0, 0, 0, .45)'}}>
          Copyright <CopyrightOutlined/> {new Date().getFullYear()} By HuanSi
        </div>
      </div>
    </Layout.Footer>
  )
}
