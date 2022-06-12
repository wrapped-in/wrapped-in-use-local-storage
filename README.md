![Wrapped](https://github.com/wrapped-in/wrapped-in-use-localstorage/blob/main/publick/logo.png)
# React Hook for using Local Storage

## Installation

npm:

```bash
$ npm install wrapped-localstorage

```

## Feature List

### Set key
```jsx
  ...useLocalStorage("Your key of Local Storage");
```

### Get property of key
```jsx
  const [value, setValue, deleteValue] = useLocalStorage("key");

  console.log(value);

  // Result - "Value of key in Local Storage"
  // __________________________________________________
  // "Hello, world!"
```

### Set property of key
```jsx
  const [value, setValue, deleteValue] = useLocalStorage("key");

  setValue("Hellow, world!");
```

### Delete property of key
```jsx
  const [value, setValue, deleteValue] = useLocalStorage("key");

  deleteValue();
```

## Basic Usage
In its most basic form, the `useLocalStorage` hook just needs the Local Storage `key` you wish to use.

The following usage will persist the `username` variable in a `"name"` key in Local Storage.

There is no default value because there is no store with key `"name"`. Storage is created and deleted only if `"username" === undefined`, `null` or its `length === 0`

```jsx
import useLocalStorage from 'wrapped-in-use-local-storage';

const MyComponent = () => {
  const [username, setUsername, deleteUsername] = useLocalStorage("name");

  return (
    <>
    <input
      value={username}
      onChange={ (e) => {
        setUsername(e.target.value);
      }}
    />

    <button
      onClick={ () => {
        deleteUsername();
      }}
    >
      Remove Username
    </button>

    </>
  );
}
```
**Note:** By default, the `useLocalStorage` hook uses `JSON.stringify` and `JSON.parse` to serialize and parse the data