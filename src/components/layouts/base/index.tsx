"use client";
import store from "@/services/store";
import { Provider } from "react-redux";
import BaseNestedLayout from "../baseNested";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (<Provider store={store}><BaseNestedLayout>{children}</BaseNestedLayout></Provider>)
}
export default BaseLayout;