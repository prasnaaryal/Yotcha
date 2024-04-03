import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Review = () => {
  return (
    <div className="bg-white mt-10 rounded-xl">
      <div className="mt-6 px-10 flex flex-col">
        <div className="flex flex-col">
          <h1 className="font-bold pt-8 mr-4"> 3 Reviews</h1>
          <div className="border-b-4 border-teal-500 my-2 w-12"></div>
        </div>

        <div>
          <div className="flex  justify-between gap-10 mb-10 mt-4">
            {/* Image */}
            <div>
              <img src="/assets/face.png" className="w-52 h-auto " alt="" />
            </div>

            <div>
              <div className="flex w-full justify-between">
                <div>
                  <h1 className="text-teal-500 font-semibold mb-2">
                    Wilson Culhane
                  </h1>
                  <p className="text-gray-600 mb-4">May 30 2020</p>
                </div>
                <img
                  src="/assets/star.png"
                  className="w-auto h-4"
                  alt="review"
                />
              </div>

              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                aliquam, quam congue dictum luctus, lacus magna congue ante, in
                finibus dui sapien eu dolor. Integer tinciduntsuscipit erat, nec
                laoreet ipsum vestibulum sed.
              </p>
            </div>
          </div>

          <div className="flex  justify-between gap-10 mb-10">
            {/* Image */}
            <div>
              <img src="/assets/face.png" className="w-52 h-auto " alt="" />
            </div>

            <div>
              <div className="flex w-full justify-between">
                <div>
                  <h1 className="text-teal-500 font-semibold mb-2">
                    Wilson Culhane
                  </h1>
                  <p className="text-gray-600 mb-4">May 30 2020</p>
                </div>
                <img
                  src="/assets/star.png"
                  className="w-auto h-4"
                  alt="review"
                />
              </div>

              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                aliquam, quam congue dictum luctus, lacus magna congue ante, in
                finibus dui sapien eu dolor. Integer tinciduntsuscipit erat, nec
                laoreet ipsum vestibulum sed.
              </p>
            </div>
          </div>

          <div className="flex  justify-between gap-10 mb-10 ">
            {/* Image */}
            <div>
              <img src="/assets/face.png" className="w-52 h-auto " alt="" />
            </div>

            <div>
              <div className="flex w-full justify-between">
                <div>
                  <h1 className="text-teal-500 font-semibold mb-2">
                    Wilson Culhane
                  </h1>
                  <p className="text-gray-600 mb-4">May 30 2020</p>
                </div>
                <img
                  src="/assets/star.png"
                  className="w-auto h-4"
                  alt="review"
                />
              </div>

              <p className="text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                aliquam, quam congue dictum luctus, lacus magna congue ante, in
                finibus dui sapien eu dolor. Integer tinciduntsuscipit erat, nec
                laoreet ipsum vestibulum sed.
              </p>
            </div>
          </div>
        </div>

        <div className="border-b-2"></div>

        <div>
          <div className="flex flex-col">
            <h1 className="font-bold pt-8 "> Add Review</h1>
            <div className="border-b-4 border-teal-500 my-2 w-12"></div>
          </div>

          <div className="flex justify-between">
            <p>Your rating for this listing</p>
            <Button
              variant="default"
              size="lg"
              className="rounded-full w-32 h-10"
            >
              Upload Photos
            </Button>{" "}
          </div>

          <div>
            <Input type="email" placeholder="Email" className="mb-4" />
            <Textarea placeholder="Message" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
