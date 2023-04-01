import React from "react";

const QA = () => {
  return (
    <div className="mt-10">
      <h2 class="text-2xl font-bold text-center">Question And Answer</h2>
      <article class="border rounded-lg p-5 m-5">
        <h3 class="text-xl font-bold">
          what is difference between props and state in react?
        </h3>
        <h5 class="font-bold text-lg">Props vs state:</h5>
        <p>
          <span class="font-bold">props:</span> Props make components reusable.
          We cannot modified props. Props We can only read. Using props we can
          send data one component ot other componets. Props are immutable.
        </p>
        <p>
          <span class="font-bold">State:</span> We cannot modified corrent data
          but we can set new data in state. state provide a function to set new
          data. State is mutable. State cannot make components reusable.
        </p>
      </article>
      <article class="border rounded-lg p-5 m-5">
        <h3 class="text-xl font-bold">how to work useState in react?</h3>
        <p>
          <span class="font-bold">useState:</span> useState is a Hook. First
          need destructuring useState from react. UseState hook accepts an
          initial state and returns two values (one is state, second is
          function).Then need to set initial vai in useState. useState provide a
          function. We are using this function we can set new value in state.
          Then we can use state in current components.
        </p>
      </article>
      <article class="border rounded-lg p-5 m-5">
        <h3 class="text-xl font-bold">how to work useState in react?</h3>
        <p>
          <span class="font-bold">useEffect:</span> When we are working outside
          from components It's called side effect.React's useEffect hook allows
          us to run side effects in a functional component, such as fetching
          data from an API,getting data from local storage. Then need to
          re-render. useEffect receive two parameter first a function and second
          a dependence. When need value changed then need to re-render.
          useEffect help to re-render updated value based on dependence value.
          useEffect re-render when useEffect value was changed.
        </p>
      </article>
      <article class="border rounded-lg p-5 m-5">
        <h3 class="text-xl font-bold">how dose React work?</h3>
        <p>
          <span class="font-bold">React:</span> React.js is a javascript
          library. React.js framework is an open-source JavaScript library.React
          js for front-end devlopments. React js does not work directly in the
          browser's dom. React uses a virtual DOM to efficiently update the UI
          and only re-renders components that have changed.thats why it works
          fast and gets responsive easily.
        </p>
      </article>
    </div>
  );
};

export default QA;
