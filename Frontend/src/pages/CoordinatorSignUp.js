// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // // Styling for form input and button
// // // const inputStyle = {
// // //     width: "100%",
// // //     padding: "0.8rem",
// // //     margin: "0.8rem 0",
// // //     border: "1px solid #ccc",
// // //     borderRadius: "5px",
// // //     fontSize: "1rem",
// // //     outline: "none",
// // //     boxSizing: "border-box",
// // // };

// // // const buttonStyle = {
// // //     width: "100%",
// // //     padding: "0.8rem",
// // //     backgroundColor: "#4CAF50",
// // //     color: "white",
// // //     border: "none",
// // //     borderRadius: "5px",
// // //     fontSize: "1rem",
// // //     fontWeight: "bold",
// // //     cursor: "pointer",
// // //     transition: "background-color 0.3s",
// // // };

// // // const CoordinatorSignUp = () => {
// // //     const [formData, setFormData] = useState({
// // //         name: "",
// // //         email: "",
// // //         password: "",
// // //         confirmPassword: "",
// // //     });

// // //     const [error, setError] = useState(""); // Handle error messages
// // //     const navigate = useNavigate();

// // //     // Update form state when input changes
// // //     const handleChange = (e) => {
// // //         setFormData({ ...formData, [e.target.name]: e.target.value });
// // //         setError(""); // Reset error on input change
// // //     };

// // //     // Validate form fields
// // //     const validateForm = () => {
// // //         if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
// // //             setError("All fields are required.");
// // //             return false;
// // //         }
// // //         if (formData.password !== formData.confirmPassword) {
// // //             setError("Passwords do not match.");
// // //             return false;
// // //         }
// // //         if (!/\S+@\S+\.\S+/.test(formData.email)) {
// // //             setError("Please enter a valid email address.");
// // //             return false;
// // //         }
// // //         return true;
// // //     };

// // //     // Handle form submission
// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();

// // //         // Validate the form before sending the data
// // //         if (!validateForm()) return;

// // //         try {
// // //             const response = await fetch("http://localhost:5000/api/coordinator/signup", {
// // //                 method: "POST",
// // //                 headers: {
// // //                     "Content-Type": "application/json",
// // //                 },
// // //                 body: JSON.stringify(formData),
// // //             });

// // //             const data = await response.json();

// // //             if (response.ok) {
// // //                 alert("Signup successful!");
// // //                 navigate("/coordinator/dashboard"); // Navigate to the dashboard on success
// // //             } else {
// // //                 setError(data.error || "An error occurred. Please try again.");
// // //             }
// // //         } catch (error) {
// // //             setError("Failed to connect to the server. Please try again.");
// // //         }
// // //     };

// // //     return (
// // //         <div style={{ marginTop: '20px' }}>
// // //             <h2 style={{ textAlign: 'center' }}>Coordinator Sign Up</h2>
// // //             {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>} {/* Display error message */}
// // //             <form onSubmit={handleSubmit}>
// // //                 <input
// // //                     name="name"
// // //                     type="text"
// // //                     placeholder="Name"
// // //                     onChange={handleChange}
// // //                     value={formData.name}
// // //                     style={inputStyle}
// // //                 />
// // //                 <input
// // //                     name="email"
// // //                     type="email"
// // //                     placeholder="Email"
// // //                     onChange={handleChange}
// // //                     value={formData.email}
// // //                     style={inputStyle}
// // //                 />
// // //                 <input
// // //                     name="password"
// // //                     type="password"
// // //                     placeholder="Password"
// // //                     onChange={handleChange}
// // //                     value={formData.password}
// // //                     style={inputStyle}
// // //                 />
// // //                 <input
// // //                     name="confirmPassword"
// // //                     type="password"
// // //                     placeholder="Confirm Password"
// // //                     onChange={handleChange}
// // //                     value={formData.confirmPassword}
// // //                     style={inputStyle}
// // //                 />
// // //                 <button
// // //                     type="submit"
// // //                     style={buttonStyle}
// // //                 >
// // //                     Sign Up
// // //                 </button>
// // //             </form>
// // //         </div>
// // //     );
// // // };

// // // export default CoordinatorSignUp;







// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // // Styling for form input and button
// // const inputStyle = {
// //     width: "100%",
// //     padding: "0.8rem",
// //     margin: "0.8rem 0",
// //     border: "1px solid #ccc",
// //     borderRadius: "5px",
// //     fontSize: "1rem",
// //     outline: "none",
// //     boxSizing: "border-box",
// // };

// // const buttonStyle = {
// //     width: "100%",
// //     padding: "0.8rem",
// //     backgroundColor: "#4CAF50",
// //     color: "white",
// //     border: "none",
// //     borderRadius: "5px",
// //     fontSize: "1rem",
// //     fontWeight: "bold",
// //     cursor: "pointer",
// //     transition: "background-color 0.3s",
// // };

// // const CoordinatorSignUp = () => {
// //     const [formData, setFormData] = useState({
// //         name: "",
// //         email: "",
// //         password: "",
// //         confirmPassword: "",
// //     });

// //     const [error, setError] = useState(""); // Handle error messages
// //     const navigate = useNavigate();

// //     // Update form state when input changes
// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //         setError(""); // Reset error on input change
// //     };

// //     // Validate form fields
// //     const validateForm = () => {
// //         if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
// //             setError("All fields are required.");
// //             return false;
// //         }
// //         if (formData.password !== formData.confirmPassword) {
// //             setError("Passwords do not match.");
// //             return false;
// //         }
// //         if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //             setError("Please enter a valid email address.");
// //             return false;
// //         }
// //         return true;
// //     };

// //     // Handle form submission
// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         // Validate the form before sending the data
// //         if (!validateForm()) return;

// //         try {
// //             const response = await fetch("http://localhost:5000/api/coordinator/signup", {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                 },
// //                 body: JSON.stringify(formData),
// //             });

// //             const data = await response.json();

// //             if (response.ok) {
// //                 alert("Signup successful!");
// //                 navigate("/coordinator/dashboard"); // Navigate to the dashboard on success
// //             } else {
// //                 setError(data.error || "An error occurred. Please try again.");
// //             }
// //         } catch (error) {
// //             setError("Failed to connect to the server. Please try again.");
// //         }
// //     };

// //     return (
// //         <div style={{ marginTop: '20px' }}>
// //             <h2 style={{ textAlign: 'center' }}>Coordinator Sign Up</h2>
// //             {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>} {/* Display error message */}
// //             <form onSubmit={handleSubmit}>
// //                 <input
// //                     name="name"
// //                     type="text"
// //                     placeholder="Name"
// //                     onChange={handleChange}
// //                     value={formData.name}
// //                     style={inputStyle}
// //                 />
// //                 <input
// //                     name="email"
// //                     type="email"
// //                     placeholder="Email"
// //                     onChange={handleChange}
// //                     value={formData.email}
// //                     style={inputStyle}
// //                 />
// //                 <input
// //                     name="password"
// //                     type="password"
// //                     placeholder="Password"
// //                     onChange={handleChange}
// //                     value={formData.password}
// //                     style={inputStyle}
// //                 />
// //                 <input
// //                     name="confirmPassword"
// //                     type="password"
// //                     placeholder="Confirm Password"
// //                     onChange={handleChange}
// //                     value={formData.confirmPassword}
// //                     style={inputStyle}
// //                 />
// //                 <button
// //                     type="submit"
// //                     style={buttonStyle}
// //                 >
// //                     Sign Up
// //                 </button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default CoordinatorSignUp;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // Styling for form input and button
// const inputStyle = {
//     width: "100%",
//     padding: "0.8rem",
//     margin: "0.8rem 0",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     fontSize: "1rem",
//     outline: "none",
//     boxSizing: "border-box",
// };

// const buttonStyle = {
//     width: "100%",
//     padding: "0.8rem",
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     fontSize: "1rem",
//     fontWeight: "bold",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
// };

// const CoordinatorSignUp = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//     });

//     const [error, setError] = useState(""); // Handle error messages
//     const navigate = useNavigate();

//     // Update form state when input changes
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//         setError(""); // Reset error on input change
//     };

//     // Validate form fields
//     const validateForm = () => {
//         if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
//             setError("All fields are required.");
//             return false;
//         }
//         if (formData.password !== formData.confirmPassword) {
//             setError("Passwords do not match.");
//             return false;
//         }
//         if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             setError("Please enter a valid email address.");
//             return false;
//         }
//         return true;
//     };

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//       };
    
//       const handleSignup = async (e) => {
//         e.preventDefault();
//         try {
//           const response = await fetch("/api/coordinator/signup", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(formData),
//           });
    
//           const data = await response.json();
    
//           if (data.success) {
//             // Save token to localStorage
//             localStorage.setItem("authToken", data.token);
    
//             // Navigate to Dashboard
//             navigate("/coordinator/dashboard");
//           } else {
//             setError(data.message || "Signup failed");
//           }
//         } catch (error) {
//           console.error("Signup error:", error);
//           setError("An error occurred. Please try again.");
//         }
//       };
//     // // Handle form submission
//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();

//     //     // Validate the form before sending the data
//     //     if (!validateForm()) return;

//     //     try {
//     //         const response = await fetch("http://localhost:5000/api/coordinator/signup", {
//     //             method: "POST",
//     //             headers: {
//     //                 "Content-Type": "application/json",
//     //             },
//     //             body: JSON.stringify(formData),
//     //         });

//     //         const data = await response.json();

//     //         if (response.ok) {
//     //             alert("Signup successful!");
//     //             navigate("/coordinator/dashboard"); // Navigate to the dashboard on success
//     //         } else {
//     //             setError(data.error || "An error occurred. Please try again.");
//     //         }
//     //     } catch (error) {
//     //         setError("Failed to connect to the server. Please try again.");
//     //     }
//     // };

//     return (
//         <div style={{ marginTop: "20px" }}>
//             <h2 style={{ textAlign: "center" }}>Coordinator Sign Up</h2>
//             {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>} {/* Display error message */}
//             <form onSubmit={handleSubmit}>
//                 <input
//                     name="name"
//                     type="text"
//                     placeholder="Name"
//                     onChange={handleChange}
//                     value={formData.name}
//                     style={inputStyle}
//                 />
//                 <input
//                     name="email"
//                     type="email"
//                     placeholder="Email"
//                     onChange={handleChange}
//                     value={formData.email}
//                     style={inputStyle}
//                 />
//                 <input
//                     name="password"
//                     type="password"
//                     placeholder="Password"
//                     onChange={handleChange}
//                     value={formData.password}
//                     style={inputStyle}
//                 />
//                 <input
//                     name="confirmPassword"
//                     type="password"
//                     placeholder="Confirm Password"
//                     onChange={handleChange}
//                     value={formData.confirmPassword}
//                     style={inputStyle}
//                 />
//                 <button type="submit" style={buttonStyle}>
//                     Sign Up
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default CoordinatorSignUp;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Styling for form input and button
const inputStyle = {
    width: "100%",
    padding: "0.8rem",
    margin: "0.8rem 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
    outline: "none",
    boxSizing: "border-box",
};

const buttonStyle = {
    width: "100%",
    padding: "0.8rem",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s",
};

const CoordinatorSignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState(""); // Handle error messages
    const navigate = useNavigate();

    // Update form state when input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(""); // Reset error on input change
    };

    // Validate form fields
    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setError("All fields are required.");
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError("Please enter a valid email address.");
            return false;
        }
        return true;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form before sending the data
        if (!validateForm()) return;

        try {
            const response = await fetch("/api/coordinator/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // Save token to localStorage
                localStorage.setItem("authToken", data.token);

                // Navigate to Dashboard
                navigate("/coordinator/dashboard");
            } else {
                setError(data.message || "Signup failed");
            }
        } catch (error) {
            console.error("Signup error:", error);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div style={{ marginTop: "20px" }}>
            <h2 style={{ textAlign: "center" }}>Coordinator Sign Up</h2>
            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>} {/* Display error message */}
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    value={formData.name}
                    style={inputStyle}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                    style={inputStyle}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={formData.password}
                    style={inputStyle}
                />
                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    value={formData.confirmPassword}
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default CoordinatorSignUp;
