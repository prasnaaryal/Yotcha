import WithLayout from "@/components/WithLayout";
import MainLayout from "@/layouts/MainLayout";
import PropertyDetail from "@/views/PropertyDetail/PropertyDetail";
import React from "react";

const detail = () => {
  return (
    <React.Fragment>
      <WithLayout layout={MainLayout} component={PropertyDetail} />
    </React.Fragment>
  );
};

export default detail;
