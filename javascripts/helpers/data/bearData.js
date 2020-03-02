 // add bear data

 const bears =[
     {
         id:'bear1',
         name: 'Buggy',
         imageUrl: 'https://www.anchoragemuseum.org/media/8868/river-of-bears.jpg'
     },
     {
        id:'bear2',
        name: 'Kobe',
        imageUrl: 'https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/3/14/1363280400191/6b0ed493-5b13-46c0-9de9-fa7e84c21c2f-461x480.jpeg'
    },
    {
        id:'bear3',
        name: 'Gianna',
        imageUrl: 'https://www.toledoblade.com/image/2013/04/22/x600_q65_p101/CTY-cubs23p-cub-and-fish.JPG'
    },
    {
        id:'bear4',
        name: 'Ray',
        imageUrl: 'https://doniganmerritt.files.wordpress.com/2012/01/grizzly-bear-eating-salmon-photo01.jpg'
    },
    {
        id:'bear5',
        name: 'Lucy',
        imageUrl: 'https://www.trailridgeair.com/media/images/bear-redoubt-4.jpg'
    }
 ];
 
 const getBears = () => {
     return bears;
 };

 export default { getBears };