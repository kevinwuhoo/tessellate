# tessellate

> Triangles are my favourite shape
>
> Three points where two lines meet
>
> ∆ (Alt-J) - Tessellate

## Purpose
Generate tessellated equilateral triangles with nice colors on to a canvas.

See a demo: http://kevinwuhoo.github.io/tessellate/.

## Usage
```
// returns a canvas element
tessellate({
  size: size of triangles
  colors: array of colors that are randomly chosen from

  width (optional): width of canvas returned, defaults to window.innerWidth
  height (optional): height of canvas returned, defaults to window.innerHeight
  randomColor (optional): function that returns a color, overrides the color option,
                          passed the current row and triangle index it's on for better
                          control over color placement
  disableRandomStart (optional): starts triangle generation at (0, 0)
})
```

## Things That Need Thinking
* Make a playground.
* Should there be built in color schemes? ([ColorBrewer](http://bl.ocks.org/mbostock/5577023), [ColourLovers](http://www.colourlovers.com/api/palettes/top?format=json&numResults=100))
* Other shapes? (squares, hexagons)
* Support various module definition APIs.
* Add image exporting?

## Inspirations

### Brina Lee's Photo
One of my classmates, [Brina Lee](http://brinalee.com/), had press coverage as the first #womeng at Instagram [[1](http://www.elle.com/culture/tech/interviews/a14050/brina-lee-instagram-engineer-interview/), [2](http://www.alumni.ucsd.edu/s/1170/2column-social.aspx?sid=1170&gid=1&pgid=5353)]. The photo for this press release was a photo of her standing in front of a wall(?) where there were tessellated triangles.

![](/img/brina-triangles.jpg)
I really want to visit where ever this is in person.

### iPhone Backgrounds
<img src="/img/iphone-blue-triangles.png" height=400> <img src="/img/iphone-bright-triangles.png" height=400>

### Tess Rinearson
When we met, [Tess](http://tes.sr/) was wearing a necklace with triangles on it. I made a stupid joke about her name being Tess and triangles and whether she only wears shapes that tessellate.

### Alt-J - Tessellate
I really like this song: [∆ (Alt-J) - Tessellate](https://soundcloud.com/alt-j/03-tessellate).

## Other Cool Libraries Like This
* [Quinn Rohlf's](https://twitter.com/qrohlf) [trianglify](http://qrohlf.com/trianglify/) - algorithmically generated triangle art
* [Maks Surguy's](https://twitter.com/msurguy) [triangles](http://msurguy.github.io/triangles/) - Delaunay triangulation + Lambertian reflectance
