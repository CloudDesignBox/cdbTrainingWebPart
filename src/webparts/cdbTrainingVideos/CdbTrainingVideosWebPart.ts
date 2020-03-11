import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneDropdown
} from '@microsoft/sp-webpart-base';

import * as strings from 'CdbTrainingVideosWebPartStrings';
import CdbTrainingVideos from './components/CdbTrainingVideos';
import { ICdbTrainingVideosProps } from './components/ICdbTrainingVideosProps';
import { ThemeProvider, ThemeChangedEventArgs, IReadonlyTheme } from '@microsoft/sp-component-base';


export default class CdbTrainingVideosWebPart extends BaseClientSideWebPart<ICdbTrainingVideosProps> {

  //Handle themes
  private _themeProvider: ThemeProvider;
  private _themeVariant: IReadonlyTheme | undefined;
  /**
 * Update the current theme variant reference and re-render.
 *
 * @param args The new theme
 */
private _handleThemeChangedEvent(args: ThemeChangedEventArgs): void {
  this._themeVariant = args.theme;
  this.render();
}

protected onInit(): Promise<void> {
  // Consume the new ThemeProvider service
  this._themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);

  // If it exists, get the theme variant
  this._themeVariant = this._themeProvider.tryGetTheme();

  // Register a handler to be notified if the theme variant changes
  this._themeProvider.themeChangedEvent.add(this, this._handleThemeChangedEvent);

  return super.onInit();
}

  public render(): void {
    const element: React.ReactElement<ICdbTrainingVideosProps > = React.createElement(
      CdbTrainingVideos,
      {
        videocourse: this.properties.videocourse,
        videotypes: this.properties.videotypes,
        themeVariant: this._themeVariant
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneDropdown('videotypes', {
                  label: "Video Type",
                  options: [
                    { key: 'Education', text: 'Education' },
                    { key: 'Business', text: 'Business' }
                  ]
                }),
                PropertyPaneDropdown('videocourse', {
                  label: "Course or Category",
                  options: [
                    { key: 'SharePoint', text: 'SharePoint' },
                    { key: 'Teams', text: 'Teams' },
                    { key: 'User Adoption Podcasts', text: 'User Adoption Podcasts' }
                  ]
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
