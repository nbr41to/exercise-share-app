import React from 'react';
import StyledComponent from "./Info.styled"
import ReactMarkdown from 'react-markdown'

const markdown = `
# アップデート情報
---
## 2020/10/09
* アップデート情報のページを追加
* メニューバーを下に変更
* いくつかのモーダルをページに変更
---
## 2020/10/01
* ログイン状態は維持されるように変更
* ゲストログイン機能の追加
---
[Source](https://github.com/nbr41to/exercise-share-app)
`

function Info() {
  return (
    <StyledComponent>
      <ReactMarkdown
        source={markdown}
      />
    </StyledComponent>
  );
}

export default Info;
