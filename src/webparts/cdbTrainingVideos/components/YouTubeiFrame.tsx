import * as React from 'react';
import styles from './CdbTrainingVideos.module.scss';
import { YouTubeProps } from './ICdbTrainingVideosProps';

export class YouTubeiFrame extends React.Component<YouTubeProps, {}> {

    constructor(props){
        super(props);
    }
    public render(): JSX.Element  {
      return (
        <div className={ styles.cdbTrainingVideos }>
          <div className={ styles.container }>
            <div className={ styles.row }>
              <div className={ styles.column }>
                <div
                className="video"
                style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0
                }}
                >
                        
                <iframe
                    style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                    }}
                    src={`https://www.youtube.com/embed/${this.props.videourl}`}
                    frameBorder="0"
                />  
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  