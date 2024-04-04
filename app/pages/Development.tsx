import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const Development = () => {
  return (
    <div id="howitworks" className="flex flex-col py-12 justify-center w-full items-center min-h-screen">
      <div className="flex py-12 justify-center items-center flex-col md:text-3xl text-2xl">
        <h1>How development</h1>
        <h1 className="font-bold">through Alcaline works</h1>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 flex-1">
        <Card className="mac">
          <CardHeader>
            <CardTitle className="flex items-center md:text-xl text-xl">
              <p className="text-transparent bg-clip-text bg-gradient-to-br p-2 from-pink-500 to-blue-800">#1</p>
              <p>Assemble the right team</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="mac">
          <CardHeader>
            <CardTitle className="flex items-center md:text-xl text-xl">
              <p className="text-transparent bg-clip-text bg-gradient-to-br p-2 from-pink-500 to-blue-800">#2</p>
              <p>Sprint planning</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="mac">
          <CardHeader>
            <CardTitle className="flex items-center md:text-xl text-xl">
              <p className="text-transparent bg-clip-text bg-gradient-to-br p-2 from-pink-500 to-blue-800">#3</p>
              <p>Tech architecture</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="mac">
          <CardHeader>
            <CardTitle className="flex items-center md:text-xl text-xl">
              <p className="text-transparent bg-clip-text bg-gradient-to-br p-2 from-pink-500 to-blue-800">#4</p>
              <p>Standups & weekly demos</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="mac">
          <CardHeader>
            <CardTitle className="flex items-center md:text-xl text-xl">
              <p className="text-transparent bg-clip-text bg-gradient-to-br p-2 from-pink-500 to-blue-800">#5</p>
              <p>Code reviews</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="mac">
          <CardHeader>
            <CardTitle className="flex items-center md:text-xl text-xl">
              <p className="text-transparent bg-clip-text bg-gradient-to-br p-2 from-pink-500 to-blue-800">#6</p>
              <p>Iterative delivery</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Development;
