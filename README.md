# Will it cache?

```
npm start
Open http://localhost
```


## Chrome 75, Edge 17, Firefox 68
```
main thread fetch took 5009ms, therefore fromCache=false
sw fetch took 4ms, therefore fromCache=true
```


## Safari 11.1+
~~Suspect fetches made by service worker bypass the HTTP cache.~~

~~Either that or what we saw elsewhere was its devtools misreporting.~~

Does the same.
