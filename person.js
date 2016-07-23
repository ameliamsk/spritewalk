// !!! catch the can of sprite - sprite walk
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
var slow = 0;
var img = new Image();
img.src = "sprite.png";
var img2 = new Image();
img2.src = "tiles.png";
var img3 = new Image();
img3.src = "bush.png";

canvas.width  = window.innerWidth - 21;
canvas.height = window.innerHeight - 21;

// bush1 object
var bush1 =
{
    x: 0,
    y: 0
}
bush1.x = Math.random() * (Math.floor(canvas.width / 64));
bush1.x = Math.floor(bush1.x) * 64;
bush1.y = Math.random() * (Math.floor(canvas.height / 64));
bush1.y = Math.floor(bush1.y) * 64;

// bush2 object
var bush2 =
{
    x: 0,
    y: 0,
}
bush2.x = Math.random() * (Math.floor(canvas.width / 64));
bush2.x = Math.floor(bush2.x) * 64;
bush2.y = Math.random() * (Math.floor(canvas.height / 64));
bush2.y = Math.floor(bush2.y) * 64;

// bush3 object
var bush3 =
{
    x: 0,
    y: 0
}
bush3.x = Math.random() * (Math.floor(canvas.width / 64));
bush3.x = Math.floor(bush3.x) * 64;
bush3.y = Math.random() * (Math.floor(canvas.height / 64));
bush3.y = Math.floor(bush3.y) * 64;

// sprite object
var sprite = {
    x: window.innerWidth/2,
    y: window.innerHeight/2,
    width: 64,
    height: 64,
    direction:'none',

    imgx: 0,
    imgy: 640,

 
    update: function() {
        // stopping at walls and walking animation
        // up
        if (this.direction === 'up')
        {
            if (this.y <= 0)
            {
                this.y = 0;
            }
            else
            {
                this.y-=3;
            }
            this.imgy = 512;
         
            if (slow >= 5)
            {
                this.imgx+=64;
                slow = 0;
            }
            if (this.imgx > 512)
            {
                this.imgx = 0;
            }
         
        }
        // down
        if (this.direction === 'down')
        {
            if (this.y + 64 >= canvas.height)
            {
                this.y = canvas.height - 64;
            }
            else
            {
                this.y+=3;
            }
            this.imgy = 640;
            if (slow >= 5)
            {
                 this.imgx+=64;
                 slow = 0;
            }
            if (this.imgx > 512)
            {
                this.imgx = 0;
            }
        }
        // left
        if (this.direction === 'left')
        {
            if (this.x <= 0)
            {
                this.x = 0;
            }
            else
            {
                this.x-=3;
            }
            this.imgy = 576;
            if (slow >= 5)
            {
                this.imgx+=64;
                slow = 0;
            }
            if (this.imgx > 512)
            {
                this.imgx = 0;
            }
        }
        // right
        if (this.direction === 'right')
        {
            if (this.x + 64 >= canvas.width)
            {
                this.x = canvas.width - 64;
            }
            else
            {
                this.x+=3;
            }
            this.imgy = 704;
                
            if (slow >= 5)
            {
                this.imgx+=64;
                slow = 0;
            }
            if (this.imgx > 512)
            {
                this.imgx = 0;
            }
        }

        // don't run into bush1
        if (this.direction === 'up' && ((this.y <= bush1.y + 15 && this.y >= bush1.y) && (this.x >= bush1.x - 32 && this.x <= bush1.x + 32)))
        {
            this.y+=3;
        }
        else if (this.direction === 'down' && ((this.y >= bush1.y - 64 && this.y <= bush1.y + 15) && (this.x >=bush1.x - 32 && this.x <= bush1.x + 32)))
        {
            this.y-=3;
        }
        if (this.direction === 'left' && ((this.x <= bush1.x - 32 + 64 && this.x >= bush1.x - 32) && (this.y >= bush1.y - 32 - 32 && this.y <= bush1.y + 64 - 32 - 32)))
        {
            this.x+=3;
        }
        else if (this.direction === 'right' && ((this.x + 64 >= bush1.x + 32 && this.x <= bush1.x + 32) && (this.y >= bush1.y - 32 - 32 && this.y <= bush1.y + 64 - 32 - 32)))
        {
            this.x-=3;
        }

        // don't run into bush2
        if (this.direction === 'up' && ((this.y <= bush2.y + 15 && this.y >= bush2.y) && (this.x >= bush2.x - 32 && this.x <= bush2.x + 32)))
        {
            this.y+=3;
        }
        else if (this.direction === 'down' && ((this.y >= bush2.y - 64 && this.y <= bush2.y + 15) && (this.x >= bush2.x - 32 && this.x <= bush2.x + 32)))
        {
            this.y-=3;
        }
        if (this.direction === 'left' && ((this.x <= bush2.x - 32 + 64 && this.x >= bush2.x - 32) && (this.y >= bush2.y - 32 - 32 && this.y <= bush2.y + 64 - 32 - 32)))
        {
            this.x+=3;
        }
        else if (this.direction === 'right' && ((this.x + 64 >= bush2.x + 32 && this.x <= bush2.x + 32) && (this.y >= bush2.y - 32 - 32 && this.y <= bush2.y + 64 - 32 - 32)))
        {
            this.x-=3;
        }

        // don't run into bush3

        if (this.direction === 'up' && ((this.y <= bush3.y + 15 && this.y >= bush3.y) && (this.x >= bush3.x - 32 && this.x <= bush3.x + 32)))
        {
            this.y+=3;
        }
        else if (this.direction === 'down' && ((this.y >= bush3.y - 64 && this.y <= bush3.y + 15) && (this.x >= bush3.x - 32 && this.x <= bush3.x + 32)))
        {
            this.y-=3;
        }
        if (this.direction === 'left' && ((this.x <= bush3.x - 32 + 64 && this.x >= bush3.x - 32) && (this.y >= bush3.y - 32 - 32 && this.y <= bush3.y + 64 - 32 - 32)))
        {
            this.x+=3;
        }
        else if (this.direction === 'right' && ((this.x + 64 >= bush3.x + 32 && this.x <= bush3.x + 32) && (this.y >= bush3.y - 32 - 32 && this.y <= bush3.y + 64 - 32 - 32)))
        {
            this.x-=3;
        }

        slow++;
    },

    render: function() {
        // drawing background
        for (var x = 0; x< canvas.width; x+=64)
        {
            for (var y = 0; y < canvas.height; y+=64)
            {
                ctx.drawImage(img2, 0, 128, 64, 64, x, y, 64, 64);
            }
        }
        // bushes
        ctx.drawImage(img3, 128, 288, 96, 96, bush1.x, bush1.y, 64, 64);
        ctx.drawImage(img3, 128, 288, 96, 96, bush2.x, bush2.y, 64, 64);
        ctx.drawImage(img3, 128, 288, 96, 96, bush3.x, bush3.y, 64, 64);
        // sprite
        ctx.drawImage(img, sprite.imgx, sprite.imgy, 64, 64, sprite.x, sprite.y, 64, 64);
    }
};

window.addEventListener("keydown", function(e) {
// when you press arrow keys

    if (e.keyCode === 38)
    {
        sprite.direction = 'up';   
    }
    if (e.keyCode === 40)
    {
        sprite.direction = 'down';
    }
    if (e.keyCode === 37)
    {
        sprite.direction = 'left';
    }
    if (e.keyCode === 39)
    {
        sprite.direction = 'right';
    }
        
}, false);

window.addEventListener("keyup", function(e) {
// when you stop pressing arrow keys

    sprite.direction = 'none';
    if (sprite.direction == 'up')
    {
        sprite.imgy = 512;
    }
    if (sprite.direction == 'down')
    {
        sprite.imgy = 640;
    }
    if (sprite.direction == 'left')
    {
        sprite.imgy = 576;
    }
    if (sprite.direction == 'right')
    {
        sprite.imgy = 704;
    }
    
}, false);


var update = function()
{   
    sprite.update();

};

var render = function()
{
    sprite.render();
};

var main = function()
{
   update();
   render(); 
   window.requestAnimationFrame(main);
};

main();

