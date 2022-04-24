##### ProtectedRoute built for React Router Dom v6.

## Installation

    npm install protected-route-react

## Docs

In App.js,
`import {ProtectedRoute} from "protected-route-react"`
and

**Way 1**

Wrap your element inside of `<ProtectedRoute> </ProtectedRoute>`

like this `<ProtectedRoute> <YourComponent /> </ProtectedRoute>`

and put this in element

`<Route path="/custompath" element={} />`

as

`<Route path="/custompath" element={ <ProtectedRoute> <YourComponent /> </ProtectedRoute>} />`

## Or

**Way 2**

Use Route as Wrapper `<Route> </Route>`

and
password `<ProtectedRoute />` as element

like this `<Route element= {<ProtectedRoute />}> </Route>`

and put all the routes you want to protect inside of this

`<Route element= {<ProtectedRoute />}> </Route>`

as

`<Route element= {<ProtectedRoute />}>`  
 `<Route path="/custompath" element={<YourComponent />} />`
`<Route path="/custompath2" element={<YourComponent2 />} />`
`<Route path="/custompath3" element={<YourComponent3 />} />`
`</Route>`

## Parameters

| Parameter       | Default      | Description                                         |
| --------------- | ------------ | --------------------------------------------------- |
| isAuthenticated | `"null"`     | 'This is to check whether user is login or not'     |
| adminRoute      | `"null"`     | "This is to make admin protected route              |
| isAdmin         | `"null"`     | "This is to check whether user is admin or not      |
| redirect        | `"/login"`   | "This is to set the redirecting url                 |
| redirectAdmin   | `"/profile"` | "This is to set the redirecting url for admin route |

Please Must Install **react-router-dom**

## Created By @meabhisingh

My name is Abhishek Singh, a.k.a 6 pack programmer on YouTube.

Youtube - Click [Here](http://youtube.com/c/6packprogrammer)
Instagram - Click [Here](http://instagram.com/meabhisingh)
Twitter- Click [Here](http://twitter.com/meabhi_singh)
LinkedIn - [Click](https://www.linkedin.com/in/meabhisingh/)
