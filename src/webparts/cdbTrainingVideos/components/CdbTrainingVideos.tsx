import * as React from 'react';
import styles from './CdbTrainingVideos.module.scss';
import { ICdbTrainingVideosProps,VideoState } from './ICdbTrainingVideosProps';
import{YouTubeiFrame} from './YouTubeiFrame';
import { YouTubeProps } from './ICdbTrainingVideosProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class CdbTrainingVideos extends React.Component<ICdbTrainingVideosProps, YouTubeProps> {
  constructor(props){
    super(props);
    this.state={
        videourl:""
    };
  }

  private generateTitleBlock(videourl:string,videoTitle:string):JSX.Element{

    let videourlstring=`https://img.youtube.com/vi/${videourl}/0.jpg`;
    return(
      <tr className={styles.videoplaylistitem} onClick={() => this.videoSelected(videourl)}>
        <td className={styles.videothumbnail}>
        <img src={videourlstring} />
        </td>
        <td  className={styles.videotitle}>
        <span>{videoTitle}</span>
        </td>
      </tr>
    

    );
  }
  public render(): React.ReactElement<ICdbTrainingVideosProps> {

    let playlist:JSX.Element=(<div></div>);
    let title:string = "Training Videos by Cloud Design Box Ltd";
    let defaultVideo:string ="";

    if(this.props.videotypes == "Education" && this.props.videocourse == "Teams"){
      title = "Getting started with Teams for Education";
      defaultVideo="QUcZOJBoKkc";
      playlist=(
        <div>
          <table className={styles.playlistTable}>
          {this.generateTitleBlock("QUcZOJBoKkc","Starting an Online Lesson")}
          {this.generateTitleBlock("EgTpuIjic6E","1. Class Dashboard")}
          {this.generateTitleBlock("R5y0DUqSLNs","2. Use and Manage Conversations")}
          {this.generateTitleBlock("f5CZRe2hcR8","3. Change Class Team Icon")}
          {this.generateTitleBlock("xLLa-zpCnjs","4. View Student Folders in Teams")}
          {this.generateTitleBlock("ziGi1xAWsg8","5. Setup Class Notebook")}
          {this.generateTitleBlock("DY81Okr2WuI","6. Class Notebook and Immersive Reader")}
          {this.generateTitleBlock("43Vx3gk2lbI","7. Create Assignment for a Class")}
          {this.generateTitleBlock("BEyspbREQOo","8. Review Assignments")}
          {this.generateTitleBlock("wGeMqci70yQ","9. Create Self-Marking Quizzes")}
          </table>
        

        </div>
      );

    }else if(this.props.videotypes == "Education" && this.props.videocourse == "SharePoint"){
      title="Getting started with SharePoint in Education";
      defaultVideo="xdz5cPLNI5U";
      playlist=(
        <div>
       
       <table className={styles.playlistTable}>
        {this.generateTitleBlock("xdz5cPLNI5U","1. Folders")}
        {this.generateTitleBlock("hdSy5KHtmoc","2. Uploading and Creating Documents")}
        {this.generateTitleBlock("70XTtGI2-1g","3. Tagging Documents")}
        {this.generateTitleBlock("l3JT0792hdU","4. Document Recovery")}
        {this.generateTitleBlock("Yt_bdPIXdyg","5. Copying Files and Following Sites")}
        {this.generateTitleBlock("d0WezxFj4Wo","6. Sharing Documents")}
        {this.generateTitleBlock("2IaPXa1Xgyk","7. SharePoint News Articles")}
        </table>


    
          </div>
      );
      
    }else if(this.props.videotypes == "Education" && this.props.videocourse == "User Adoption Podcasts"){
      title="User Adoption Podcasts";
      defaultVideo="d3S6a5tYBI0";
      playlist=(

        <div>
        <table className={styles.playlistTable}>
        {this.generateTitleBlock("jt5gul21nbo","Episode 11: Supporting Students with SEN and EAL with Office 365")}
        {this.generateTitleBlock("d3S6a5tYBI0","Episode 10: Virtual Lessons using Microsoft Teams")}
        {this.generateTitleBlock("w0nQSgAC41c","Episode 9: What is an MIE Expert and how do I become one?")}
        {this.generateTitleBlock("o5SPr_jldEs","Episode 8: School Leadership with Microsoft Teams")}
        {this.generateTitleBlock("hyDrgo9TGl0","Episode 7: Sharing Files in Microsoft Class Teams")}
        {this.generateTitleBlock("yfpSHZqF9OQ","Episode 6: Conversations in the Classroom with Microsoft Teams")}
        {this.generateTitleBlock("1LyEPhWyHqw","Episode 5: Why should we tag resources in SharePoint?")}
        {this.generateTitleBlock("LiuvocvxJWE","Episode 4: Focus on a Long-Term Plan")}
        {this.generateTitleBlock("FxS97sOxGUc","Episode 3: Jonathan Bishop (Cornerstone Academy Trust)")}
        {this.generateTitleBlock("64UoMtY5K-4","Episode 2: Gareth Rose - Assistant Headteacher")}
        {this.generateTitleBlock("zSILlF3fUes","Episode 1: Martin from Thomas Deacon Education Trust")}

        
        </table>

        </div>
      );
      
    }else if(this.props.videotypes == "Education" && this.props.videocourse == "Student Guides"){
      title="Student Guides";
      defaultVideo="d3S6a5tYBI0";
      playlist=(

        <div>
        <table className={styles.playlistTable}>
        {this.generateTitleBlock("SemjM2fHV2Q","Student and Parent Guide to Microsoft Teams")}
        </table>

        </div>
      );
      
    }else{

    }
    
    //set default video
    if(this.state.videourl==""){
      this.videoSelected(defaultVideo);
    }
    return (
      <div className={ styles.cdbTrainingVideos }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>

              <h2>{title}</h2>
             
              <YouTubeiFrame videourl={this.state.videourl} />
              
            </div>

            <div className={ styles.column }>
             
              
              {playlist}
              
            </div>

          </div>
        </div>
      </div>
    );
  }

  //set video url
  private videoSelected(videourl:string){
    this.setState({ 
      videourl:videourl 
    });
  }
}
