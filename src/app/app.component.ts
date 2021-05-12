import { Component, OnInit } from '@angular/core';
import 'grapesjs-preset-webpage'
import grapesjs from 'grapesjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit{
  title = 'grapesjs-angular';
  editor: any
  ngOnInit(){

    this.editor = grapesjs.init({
      container: '#gjs',
      fromElement: true,

      height: '600px',
      width:'auto',

      storageManager: false,

      panels: {
        defaults: []
      },

      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'section', // id is mandatory
            label: '<b>Section</b>', // You can use HTML/SVG inside labels
            attributes: { class:'gjs-block-section' },
            content: `<section>
              <h1>This is a simple title</h1>
              <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
          }, {
            id: 'text',
            label: 'Text',
            content: '<div data-gjs-type="text">Insert your text here</div>',
          }, {
            id: 'image',
            label: 'Image',
            // Select the component once it's dropped
            select: true,
            // You can pass components as a JSON instead of a simple HTML string,
            // in this case we also use a defined component type `image`
            content: { type: 'image' },
            // This triggers `active` event on dropped components and the `image`
            // reacts by opening the AssetManager
            activate: true,
          }
        ]
      },

    })

    this.editor.getConfig().showDevices = false

    const blockManager = this.editor.BlockManager

    /*
    blockManager.add('h1-block', {
      label: 'Heading',
      content: '<h1>Put your title here</h1>',
      category: 'Basic',
     
      attributes: {
      title: 'Insert h1 block',
     
      }
    })
    */

  }
}
