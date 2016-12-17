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
var img4 = new Image();
img4.src = "sprite2.png";
var img5 = new Image();
img5.src = "spritecan.png";

canvas.width  = window.innerWidth - 21;
canvas.height = window.innerHeight - 21;
// bush1 object
var bush1 =
{
    x: 0,
    y: 0
}

// bush2 object
var bush2 =
{
    x: 0,
    y: 0,
}

// bush3 object
var bush3 =
{
    x: 0,
    y: 0
}

// sprite can object
var spritecan = 
{
    x: 0,
    y : 0
}

// sprite object
var sprite = {
    x: 0,
    y: 0,
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
        if (this.direction === 'up' && ((this.y <= bush1.y && this.y >= bush1.y - 64) && (this.x >= bush1.x - 32 && this.x <= bush1.x + 64 - 32)))
        {
            this.y+=3;
        }
        else if (this.direction === 'down' && ((this.y >= bush1.y - 64 && this.y <= bush1.y) && (this.x >=bush1.x - 32 && this.x <= bush1.x + 32)))
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
        if (this.direction === 'up' && ((this.y <= bush1.y && this.y >= bush1.y - 64) && (this.x >= bush1.x - 32 && this.x <= bush1.x + 64 - 32)))
        {
            this.y+=3;
        }
        else if (this.direction === 'down' && ((this.y >= bush1.y - 64 && this.y <= bush1.y) && (this.x >=bush1.x - 32 && this.x <= bush1.x + 32)))
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

        // don't run into bush3
        if (this.direction === 'up' && ((this.y <= bush1.y && this.y >= bush1.y - 64) && (this.x >= bush1.x - 32 && this.x <= bush1.x + 64 - 32)))
        {
            this.y+=3;
        }
        else if (this.direction === 'down' && ((this.y >= bush1.y - 64 && this.y <= bush1.y) && (this.x >=bush1.x - 32 && this.x <= bush1.x + 32)))
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

        // IF SPRITE GETS SPRITE CAN
       
        if (this.direction === 'up' && ((this.y <= spritecan.y && this.y >= spritecan.y - 64) && (this.x >= spritecan.x - 32 && this.x <= spritecan.x + 64 - 32)))
        {
            this.y+=1;
            window.alert("ROBIN SPRITE WINS/nPress OK to play again.");
            Program.restart();
        }
        else if (this.direction === 'down' && ((this.y >= spritecan.y - 64 && this.y <= spritecan.y) && (this.x >=spritecan.x - 32 && this.x <= spritecan.x + 32)))
        {
            this.y-=1;
            window.alert("ROBIN SPRITE WINS/nPress OK to play again.");
            Program.restart();
        }
        if (this.direction === 'left' && ((this.x <= spritecan.x - 32 + 64 && this.x >= spritecan.x - 32) && (this.y >= spritecan.y - 32 - 32 && this.y <= spritecan.y + 64 - 32 - 32)))
        {
            this.x+=1;
            window.alert("ROBIN SPRITE WINS/nPress OK to play again.");
            Program.restart();
        }
        else if (this.direction === 'right' && ((this.x + 64 >= spritecan.x + 32 && this.x <= spritecan.x + 32) && (this.y >= spritecan.y - 32 - 32 && this.y <= spritecan.y + 64 - 32 - 32)))
        {
            this.x-=1;
            window.alert("ROBIN SPRITE WINS/nPress OK to play again.");
            Program.restart();
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
        // sprite can
        ctx.drawImage(img5, 0, 0, 430, 860, spritecan.x, spritecan.y, 16, 32);
        // sprites
        ctx.drawImage(img, sprite.imgx, sprite.imgy, 64, 64, sprite.x + 24, sprite.y + 16, 64, 64);
        ctx.drawImage(img4, sprite2.imgx, sprite2.imgy, 64, 64, sprite2.x, sprite2.y, 64, 64);
    }
};


// sprite 2 object
var sprite2 = {
    x: 0,
    y: 0,
    width: 64,
    height: 64,
    direction:'none',

    imgx: 0,
    imgy: 640,

 
    update: function() {
        // stopping at walls and walking animation
        // w = up
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
        // s = down
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
        // a = left
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
        // d = right
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
        if (this.direction === 'up' && ((this.y <= bush1.y && this.y >= bush1.y - 64) && (this.x >= bush1.x - 32 && this.x <= bush1.x + 64 - 32)))
        {
            this.y+=3;
        }
        else if (this.direction === 'down' && ((this.y >= bush1.y - 64 && this.y <= bush1.y) && (this.x >=bush1.x - 32 && this.x <= bush1.x + 32)))
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
        if (this.direction === 'up' && ((this.y <= bush2.y && this.y >= bush2.y - 64) && (this.x >= bush2.x - 32 && this.x <= bush2.x + 64 - 32)))
        {
            this.y+=3;
        }
        else if (this.direction === 'down' && ((this.y >= bush2.y - 64 && this.y <= bush2.y) && (this.x >=bush2.x - 32 && this.x <= bush2.x + 32)))
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
        if (this.direction === 'up' && ((this.y <= bush3.y && this.y >= bush3.y - 64) && (this.x >= bush3.x - 32 && this.x <= bush3.x + 64 - 32)))
        {
            this.y+=3;
        }
        else if (this.direction === 'down' && ((this.y >= bush3.y - 64 && this.y <= bush3.y) && (this.x >=bush3.x - 32 && this.x <= bush3.x + 32)))
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

        // IF SPRITE2 GETS SPRITE CAN
       
        if (this.direction === 'up' && ((this.y <= spritecan.y && this.y >= spritecan.y - 64) && (this.x >= spritecan.x - 32 && this.x <= spritecan.x + 64 - 32)))
        {
            this.y+=1;
            window.alert("PURPLE SPRITE WINS/nPress OK to play again.");
            Program.restart();
        }
        else if (this.direction === 'down' && ((this.y >= spritecan.y - 64 && this.y <= spritecan.y) && (this.x >=spritecan.x - 32 && this.x <= spritecan.x + 32)))
        {
            this.y-=1;
            window.alert("PURPLE SPRITE WINS/nPress OK to play again.");
            Program.restart();
        }
        if (this.direction === 'left' && ((this.x <= spritecan.x - 32 + 64 && this.x >= spritecan.x - 32) && (this.y >= spritecan.y - 32 - 32 && this.y <= spritecan.y + 64 - 32 - 32)))
        {
            this.x+=1;
            window.alert("PURPLE SPRITE WINS/nPress OK to play again.");
            Program.restart();
        }
        else if (this.direction === 'right' && ((this.x + 64 >= spritecan.x + 32 && this.x <= spritecan.x + 32) && (this.y >= spritecan.y - 32 - 32 && this.y <= spritecan.y + 64 - 32 - 32)))
        {
            this.x-=1;
            window.alert("PURPLE SPRITE WINS/nPress OK to play again.");
            Program.restart();
        }

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
        // sprite can
        ctx.drawImage(img5, 0, 0, 430, 860, spritecan.x, spritecan.y, 16, 32);
        // sprites
        if (sprite.y > sprite2.y)
        {
        ctx.drawImage(img4, sprite2.imgx, sprite2.imgy, 64, 64, sprite2.x, sprite2.y, 64, 64);
        ctx.drawImage(img, sprite.imgx, sprite.imgy, 64, 64, sprite.x, sprite.y, 64, 64);
        }
        else
        {
        ctx.drawImage(img, sprite.imgx, sprite.imgy, 64, 64, sprite.x, sprite.y, 64, 64);
        ctx.drawImage(img4, sprite2.imgx, sprite2.imgy, 64, 64, sprite2.x, sprite2.y, 64, 64);
        }
    }
};





window.addEventListener("keydown", function(e) {
// when you press arrow keys

    if (e.keyCode === 38)
            sprite.direction = 'up';
    if (e.keyCode === 40)
        sprite.direction = 'down';
    if (e.keyCode === 37)
        sprite.direction = 'left';
    if (e.keyCode === 39)
        sprite.direction = 'right';
    if (e.keyCode === 87)
        sprite2.direction = 'up';
    if (e.keyCode === 83)
        sprite2.direction = 'down';
    if (e.keyCode === 65)
        sprite2.direction = 'left';
    if (e.keyCode === 68)
        sprite2.direction = 'right';
        
}, false);

window.addEventListener("keyup", function(e) {
// when you stop pressing arrow keys

    sprite.direction = 'none';
    if (sprite.direction == 'up')
        sprite.imgy = 512;
    if (sprite.direction == 'down')
        sprite.imgy = 640;
    if (sprite.direction == 'left')
        sprite.imgy = 576;
    if (sprite.direction == 'right')
        sprite.imgy = 704;

    sprite2.direction = 'none';
    if (sprite2.direction == 'up')
        sprite2.imgy = 512;
    if (sprite2.direction == 'down')
        sprite2.imgy = 640;
    if (sprite2.direction == 'left')
        sprite2.imgy = 576;
    if (sprite2.direction == 'right')
        sprite2.imgy = 704;
    
}, false);


var update = function()
{   
    sprite.update();
    sprite2.update();

};

var render = function()
{
    sprite.render();
    sprite2.render();
};

var main2 = function()
{
   update();
   render();
};

var main = function()
{
   window.alert("Purple Sprite vs. Robin Sprite\nuse arrow keys to control Robin\nuse W,A,S,D keys to control Purple");
   window.requestAnimationFrame(main2);
}

// randomizing location
// sprite
sprite.x = Math.random() * (Math.floor(canvas.width / 64));
sprite.x = Math.floor(sprite.x) * 64;
sprite.y = Math.random() * (Math.floor(canvas.height / 64));
sprite.y = Math.floor(sprite.y) * 64;

// sprite 2
sprite2.x = Math.random() * (Math.floor(canvas.width / 64));
sprite2.x = Math.floor(sprite2.x) * 64;
sprite2.y = Math.random() * (Math.floor(canvas.height / 64));
sprite2.y = Math.floor(sprite2.y) * 64;

// bush 1
bush1.x = Math.random() * (Math.floor(canvas.width / 64));
bush1.x = Math.floor(bush1.x) * 64;
bush1.y = Math.random() * (Math.floor(canvas.height / 64));
bush1.y = Math.floor(bush1.y) * 64;

// bush 2
bush2.x = Math.random() * (Math.floor(canvas.width / 64));
bush2.x = Math.floor(bush2.x) * 64;
bush2.y = Math.random() * (Math.floor(canvas.height / 64));
bush2.y = Math.floor(bush2.y) * 64;

// bush 3
bush3.x = Math.random() * (Math.floor(canvas.width / 64));
bush3.x = Math.floor(bush3.x) * 64;
bush3.y = Math.random() * (Math.floor(canvas.height / 64));
bush3.y = Math.floor(bush3.y) * 64;

// sprite can
spritecan.x = Math.random() * (Math.floor(canvas.width / 64));
spritecan.x = (Math.floor(spritecan.x) * 64) + 24;
spritecan.y = Math.random() * (Math.floor(canvas.height / 64));
spritecan.y = (Math.floor(spritecan.y) * 64) + 16;

// overlaps
// if sprite2 overlaps sprite
if (sprite.x === sprite2.x && sprite.y === sprite2.y)
{
    while (sprite.x === sprite2.x && sprite.y === sprite2.y)
    {
        sprite2.x = Math.random() * (Math.floor(canvas.width / 64));
        sprite2.x = Math.floor(sprite2.x) * 64;
        sprite2.y = Math.random() * (Math.floor(canvas.height / 64));
        sprite2.y = Math.floor(sprite2.y) * 64;
    }
}

// if bush1 overlaps sprite1 or sprite2
if ((sprite.x === bush1.x && sprite.y === bush1.y) || (sprite2.x === bush1.x && sprite2.y === bush1.y))
{
    while ((sprite.x === bush1.x && sprite.y === bush1.y) || (sprite2.x === bush1.x && sprite2.y === bush1.y))
    {
        bush1.x = Math.random() * (Math.floor(canvas.width / 64));
        bush1.x = Math.floor(bush1.x) * 64;
        bush1.y = Math.random() * (Math.floor(canvas.height / 64));
        bush1.y = Math.floor(bush1.y) * 64;
    }
}

// if bush2 overlaps sprite1 or sprite2
if ((sprite.x === bush2.x && sprite.y === bush2.y) || (sprite2.x === bush2.x && sprite2.y === bush2.y))
{
    while ((sprite.x === bush2.x && sprite.y === bush2.y) || (sprite2.x === bush2.x && sprite2.y === bush2.y))
    {
        bush2.x = Math.random() * (Math.floor(canvas.width / 64));
        bush2.x = Math.floor(bush2.x) * 64;
        bush2.y = Math.random() * (Math.floor(canvas.height / 64));
        bush2.y = Math.floor(bush2.y) * 64;
    }
}

// if bush3 overlaps sprite1 or sprite2
if ((sprite.x === bush3.x && sprite.y === bush3.y) || (sprite2.x === bush3.x && sprite2.y === bush3.y))
{
    while ((sprite.x === bush3.x && sprite.y === bush3.y) || (sprite2.x === bush3.x && sprite2.y === bush3.y))
    {
        bush3.x = Math.random() * (Math.floor(canvas.width / 64));
        bush3.x = Math.floor(bush3.x) * 64;
        bush3.y = Math.random() * (Math.floor(canvas.height / 64));
        bush3.y = Math.floor(bush3.y) * 64;
    }
}

// if spritecan overlaps bush1, bush2, bush3, sprite, or sprite2
if ((spritecan.x === bush1.x && spritecan.y === bush1.y) || (spritecan.x === bush2.x && spritecan.y === bush2.y) || (spritecan.x === bush3.x && spritecan.y === bush3.y) || (spritecan.x === sprite.x && spritecan.y === sprite.y) || (spritecan.x === sprite2.x && spritecan.y === sprite2.y))
{
    while ((spritecan.x === bush1.x && spritecan.y === bush1.y) || (spritecan.x === bush2.x && spritecan.y === bush2.y) || (spritecan.x === bush3.x && spritecan.y === bush3.y) || (spritecan.x === sprite.x && spritecan.y === sprite.y) || (spritecan.x === sprite2.x && spritecan.y === sprite2.y))
    {
        spritecan.x = Math.random() * (Math.floor(canvas.width / 64));
        spritecan.x = Math.floor(spritecan.x) * 64;
        spritecan.y = Math.random() * (Math.floor(canvas.height / 64));
        spritecan.y = Math.floor(spritecan.y) * 64;
    }
}



main();
