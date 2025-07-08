import { projects } from '@matthiasmax/cv-api';
import { Component, h } from '@stencil/core';
import i18n from '../../stores/i18n.store';
// import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

@Component({
  tag: 'deliverable-list',
  //   styleUrl: 'deliverable-list.css',
})
export class DeliverableList {
  // --------------------------------------------------------------------------
  //
  //  Render
  //
  // --------------------------------------------------------------------------
  render() {
    return projects[i18n.lang].sort((a: any, b: any) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0)).map((project: any) => <project-card project={project} />);
  }
}
