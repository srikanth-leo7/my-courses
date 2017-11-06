import { Component } from '@angular/core';
import * as jQuery from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  watchHistoryItems: any;
  dummyText: string;
  allCourses: any;

  resizeWatchHistory(){
  	 $('.transform').toggleClass('transform-active');
  }
  ngOnInit(){
    this.watchHistoryItems = [{
      'title': 'Workplace attitude',
      'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" 
    },{
      'title': 'Lorem Ipsum',
      'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" 
    },{
      'title': 'Workplace attitude',
      'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" 
    },{
      'title': 'Lorem Ipsum',
      'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    }];

    this.allCourses = [{
      'title': 'Topic 1',
      'values': [{
     'name': 'Course 1',
     'description': 'This course will provide an overview of processes and problems common in biological development'
    },{
     'name': 'Course 2',
     'description': 'This course will provide an overview of processes and problems common in biological development'
    },{
     'name': 'Course 3',
     'description': 'This course will provide an overview of processes and problems common in biological development'
    },{
     'name': 'Course 4',
     'description': 'This course will provide an overview of processes and problems common in biological development'
    },{
     'name': 'Course 5',
     'description': 'This course will provide an overview of processes and problems common in biological development'
    },{
     'name': 'Course 6',
     'description': 'This course will provide an overview of processes and problems common in biological development'
    }]
    },{
      'title': 'Topic 2',
      'values': [{
     'name': 'Course 5',
     'description': 'This course will provide an overview of processes and problems common in biological development'
    },{
     'name': 'Course 2',
     'description': 'This course will provide an overview of processes and problems common in biological development'
    },{
     'name': 'Course 6',
     'description': 'This course will provide an overview of processes and problems common in biological development'
    },{
     'name': 'Course 4',
     'description': 'This course will provide an overview of processes and problems common in biological development'
    },{
     'name': 'Course 5',
     'description': 'This course will provide an overview of processes and problems common in biological development'
    },{
     'name': 'Course 6',
     'description': 'This course will provide an overview of processes and problems common in biological development'
    }]
    }];

    this.dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry';
    var width = $(window).width(), self = this;
    self.allCourses.forEach(function(elem:any, ind:any){
      elem['calculatedValues'] = self.calculateSlideItems(width, elem.values);
    });
    $(window).on('resize', function () {
      var width = $(window).width();
      self.allCourses.forEach(function(elem:any, ind:any){
      	elem['calculatedValues'] = self.calculateSlideItems(width, elem.values);
      });
    });
     setTimeout(function() {
      $(".gallery").hover(
       function() {
        $(this).children('.desc').children('.course-text').css({'display': 'block'});
      },function(){
      	$(this).children('.desc').children('.course-text').css({'display': 'none'});
      });
     }, 1000);
  }
  calculateSlideItems(width: any, values: any) {
  	if(width > 700) {
       // desktop
       return this.buildSlide(4, values);
    } else if(width <= 700 && width > 480) {
       // tablet
       return this.buildSlide(2, values);
    } else {
       // phone
       return this.buildSlide(1, values);
    }
  }
  buildSlide(size: number, values: any) {
   var collection = [],
       slide = [],
       index;
   for(index = 0; index < values.length; index++) {
       if(slide.length === size) {
           collection.push(slide);
           slide = [];
       }
       slide.push(values[index]);
   }
   collection.push(slide);
   return collection;
}
}
