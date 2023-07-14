import React, { ReactElement } from 'react';
import styles from './index.module.less';

interface IProps {
  children: ReactElement | ReactElement[];
  type: PageContainerType
}

export enum PageContainerType {
  Resume = 'Resume',
  Blog = 'Blog',
  Article = 'Article',
  Library = 'Library'
}

const ClassNameMap = {
  [PageContainerType.Resume]: styles.resumeWrap,
  [PageContainerType.Blog]: styles.blogWrap,
  [PageContainerType.Article]: styles.articleWrap,
  [PageContainerType.Library]: styles.libraryWrap,
}

export default function PageContainer({ children, type }: IProps) {
  return <div className={ClassNameMap[type]}>
    <div className={styles.bg} />
    <div className={styles.content}>
      {children}
    </div>
  </div>
}