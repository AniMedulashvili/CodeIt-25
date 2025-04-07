// "use client";
// import { useEffect, useState } from "react";
// import styles from "./page.module.css";

// const page = ({ params }) => {
//   const [age, setAge] = useState(0);
//   const [gender, setGender] = useState(0);
//   const [nationality, setNationality] = useState(0);

//   useEffect(() => {
//     fetch(`https://api.agify.io?name=${params.name}`)
//       .then((resp) => resp.json())
//       .then((result) => setAge(result));


//       fetch(`https://api.genderize.io?name=${params.name}`)
//       .then((resp) => resp.json())
//       .then((result) => setGender(result));   
      
      
//       fetch(`https://api.nationalize.io?name=${params.name}`)
//       .then((resp) => resp.json())
//       .then((result) => setNationality(result));

//   }, [params.name]);

//   // https://api.genderize.io?name=${params.name}
//   // https://api.nationalize.io?name=${params.name}

//   console.log(age);


// return (
//   <div>
//     <h2 style={{ textAlign: "center" }}>მომხმარებლის ინფორმაცია</h2>
//     <table border="1" style={{ width: "70%", margin: "30px auto", textAlign: "0px left" }}>
//       <thead>
//         <tr style={{ backgroundColor: "rgba(11, 11, 241, 0.625)" }}>
//           <th>სახელი</th>
//           <th>რაოდენობა</th>
//           <th>საშუალო ასაკი</th>
//           <th>სქესი</th>
//           <th>ქვეყანა</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>{age?.name || "..."}</td>
//           <td>{age?.count || "..."}</td>
//           <td>{age?.age || "..."}</td>
//           <td>{gender?.gender || "..."}</td>
//           <td>{nationality?.nationality || "..."}</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );
// };

// export default page;








"use client";
import { useEffect, useState, use} from "react";
import styles from "./page.module.css";

const page = ({ params }) => {
  const { name } = use(params)
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [nationality, setNationality] = useState(null);

  useEffect(() => {
    fetch(`https://api.agify.io?name=${name}`)
      .then((resp) => resp.json())
      .then((result) => setAge(result));


      fetch(`https://api.genderize.io?name=${name}`)
      .then((resp) => resp.json())
      .then((result) => setGender(result));   
      
      
      fetch(`https://api.nationalize.io?name=${name}`)
      .then((resp) => resp.json())
      .then((result) => setNationality(result));

  }, [name]);


return (
  <div>
   <p>სახელი: {age?.name} რაოდენობა: {age?.count} საშუალო ასაკი: {age?.age}</p>
   <p>სქესი: {gender?.gender}</p>
   <p>წარმომავლობა: {nationality?.country?.[0]?.country_id}</p>
  </div>
);
};

export default page;
