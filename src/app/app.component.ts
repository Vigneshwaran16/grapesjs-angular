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

      blockmanager : {
        appendTo : '#blocks',
        blocks: [
          {
          id: 'section',
          label: 'Section',
          attributes:{ class : 'gjs-block-section' },
          content: `<section>
                    <h3> Section Heading Test/h3>
                    <p>Sample Line</p>
                    </section>`,
          },
        ]
      },
    })

    this.editor.getConfig().showDevices = false

  }
}
