import React from 'react';
import YoutubeItem from './YoutubeItem';
import { YoutubeData } from '../../data';

const YoutubeList = (props) => {
    return (
    <div className="youtube-item-list">
      {props.children}
      {YoutubeData.map((item, index) => {
        let classFromCondition = index % 2 === 0 ? "youtube-item--big" : "";
        return (
          <YoutubeItem
            title={item.title}
            img={item.img}
            author={item.author}
            className={classFromCondition}
          />
        );
      })}
    </div>
  )
    };

export default YoutubeList;