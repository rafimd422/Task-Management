import { Breakpoint } from "antd";
import { CSSProperties } from "react";

export const signUpStyles = (screens: Partial<Record<Breakpoint, boolean>>): Record<string, CSSProperties> => {
    return {
      container: {
        margin: "0 auto",
        padding: screens.md ? "16px" : "24px 16px",
        width: "380px"
      },
      footer: {
        marginTop: "24px",
        textAlign: "center",
        width: "100%"
      },
      header: {
        marginBottom: "24px"
      },
      section: {
        alignItems: "center",
        backgroundColor: "#fafafa",
        display: "flex",
        height:"100vh",
        padding: screens.md ? "24px 0" : "0"
      },
      text: {
        color: "#595959"
      },
      title: {
        fontSize: screens.md ? "24px" : "20px"
      }
    };
  };