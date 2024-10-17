"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Upload, XCircle } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function TestModal() {
  const [isLoading, setIsLoading] = useState(false);
  const [imageName, setImageName] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const [result, setResult] = useState<{
    status: "green" | "red";
    text: string;
  } | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageColor = file.name.split(".")?.[0];
      setImageName(imageColor);

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      if (imageRef.current) {
        imageRef.current.value = "";
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setResult({
      status: imageName === "green" ? "green" : "red",
      text:
        imageName === "green"
          ? "Image contains a green traffic light"
          : "Image contains a red traffic light",
    });

    setIsLoading(false);
  };
  return (
    <section
      id="test-model"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container px-4 md:px-6  max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Test Our Traffic Management Model
        </h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col items-center space-y-2">
              <label htmlFor="image-upload" className="w-full">
                <div className="w-full h-48 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:border-primary">
                  {uploadedImage ? (
                    <Image
                      src={uploadedImage}
                      alt="Uploaded traffic scene"
                      width={300}
                      height={200}
                      className="max-h-full object-contain"
                    />
                  ) : (
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-1 text-sm text-gray-600">
                        Upload a traffic scene image
                      </p>
                    </div>
                  )}
                </div>
              </label>
              <Input
                ref={imageRef}
                id="image-upload"
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={handleImageUpload}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={!uploadedImage || isLoading}
            >
              {isLoading ? "Analyzing..." : "Analyze Traffic"}
            </Button>
          </form>
          {isLoading && (
            <div className="mt-4 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="mt-2 text-sm text-gray-600">
                Analyzing traffic data...
              </p>
            </div>
          )}
          {result && (
            <div className="mt-6 p-4 border rounded-lg bg-white dark:bg-gray-800">
              <div className="flex items-center justify-center mb-2">
                {result.status === "green" ? (
                  <CheckCircle className="h-8 w-8 text-green-500" />
                ) : (
                  <XCircle className="h-8 w-8 text-red-500" />
                )}
              </div>
              <p className="text-center font-medium">{result.text}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
