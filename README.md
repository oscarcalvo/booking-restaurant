# Booking

this is a splitted codebase from another project just for testing purposes. Goal of this milestone is to create a booking component that we can embed in third party sites, as a iframe or as a widget
Design is not important now, We need only test that component can be embed and works well
. Something like "reservation-1" and "reservation-2" here https://drive.google.com/drive/folders/1muXgCPncw08oG7bMn1H-Pn7MfQBaiH_h?usp=sharing but ignore "Table" select in "reservation-1" since we dont need it and add
a button or link with the text "continue" that goes to "reservation-2" 

## start
You have to add your code to restaurant-booking component. Idea here is, you add a calendar and a select for number of people, when user select it you call to bookingService.getAvailability() passing the date selected and number of people. it responds with the time ranges that you have to add to "Time" select in "reservation-1"
In "reservation-2" when user clicks "reserve" you fill a "BookingDTO" object and call to bookingManager.saveDummyBooking()..and thats it

Remember, thing here is that component works well as embed. Sizing well when is used by iframe or widget, to test it i guess you will need to upload it to some static hosting. if you need a hosting let me know
Design or logic of the component is not important


## resources
https://github.com/davidjbradshaw/iframe-resizer

https://blog.jenyay.com/web-ui-widget/

Company that currently uses iframe (if you need see it working):https://www.covermanager.com/ and if you click in some of theirs clients you can see an implementation for example https://www.espacio33.es/reserva-online

