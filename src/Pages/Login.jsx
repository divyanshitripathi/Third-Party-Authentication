import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Input } from "../components/ui/input.js";
import { motion } from "framer-motion";
import { signInWithGoogle } from "./firebase.js";
import { AvatarIcon } from "@radix-ui/react-icons";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const validUser = { username: "admin", password: "password123" };

  const handleLogin = () => {
    if (
      credentials.username === validUser.username &&
      credentials.password === validUser.password
    ) {
      navigate("/hello");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      console.log("Google Login Successful:", user);
      navigate("/hello"); // Redirect after successful login
    } catch (error) {
      setError("Google login failed. Please try again.");
    }
  };

  return (
    // <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    //    <div className="bg-white p-6 rounded-lg shadow-md w-96">
    <Flex
      align="center"
      justify="center"
      style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}
    >
      <Card
        size="4"
        style={{
          padding: "40px",
          width: "350px",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Box mb="4">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
            width="40px"
          />
        </Box>
        <Heading as="h3" size="6" trim="start" mb="5">
          Welcome To Third-Party Authentication App
        </Heading>
        <Box mb="5">
          <Flex mb="1">
            <Text
              as="label"
              htmlFor="example-email-field"
              size="2"
              weight="bold"
            >
              Email address
            </Text>
          </Flex>
          <Input
            id="inputField"
            type="text"
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            placeholder="Enter Email or UserName"
            className="mb-3"
            style={{
              padding: "12px",
              fontSize: "16px",
              width: "90%",
              borderRadius: "6px",
            }}
          />
        </Box>
        <Box mb="5" position="relative">
          <Flex align="baseline" justify="between" mb="1">
            <Text
              as="label"
              size="2"
              weight="bold"
              htmlFor="example-password-field"
            >
              Password
            </Text>
          </Flex>
          <Input
            type="password"
            placeholder="Password"
            className="mb-3"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            style={{
              padding: "12px",
              fontSize: "16px",
              width: "90%",
              borderRadius: "6px",
            }}
          />
        </Box>

        <motion.div whileHover={{ scale: 1.1 }}>
          <Button
            className="w-full mt-3"
            variant="soft"
            onClick={handleLogin}
            style={{
              width: "100%",
              backgroundColor: "#6c63ff",
              color: "white",
              padding: "10px",
              borderRadius: "6px",
              marginBottom: "10px",
            }}
          >
            Login
          </Button>
        </motion.div>
        <div
          className="divider"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "340px",
            marginLeft: "-35px",
          }}
        >
          or
        </div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button
            className="w-full mt-3"
            variant="soft"
            onClick={handleGoogleLogin}
            style={{
              marginTop: "15px",
              width: "100%",
              backgroundColor: "#ffffff",
              color: "#333",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "6px",
            }}
          >
            {" "}
            <div style={{ display: "flex", alignItems: "center" }}>
              <AvatarIcon
                style={{ marginRight: "8px" }}
                width="20"
                height="20"
              />
              <span>Login with Google</span>
            </div>
          </Button>
          {error && (
            <p className="text-red-500" color="red">
              {error}
            </p>
          )}
        </motion.div>
      </Card>
    </Flex>
    //    </div>
    //  </div>
  );
}
