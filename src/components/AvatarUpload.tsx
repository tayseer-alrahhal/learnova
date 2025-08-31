"use client"
import { CldUploadWidget } from 'next-cloudinary';
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function AvatarUpload() {


  const handleUploadSuccess = async (result) => {
    const info = result?.info;
    const avatar = info.secure_url;
    const publicId = info.public_id;

    const res = await fetch('/api/user/upload-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ avatar, publicId }),
    });

    if (!res.ok) {
      console.error('Failed to save avatar');
    } else {
      console.log('Avatar saved successfully');
    }
  };


  return (
    <Card className="bg-gradient-to-br from-[var(--color-background)] to-[var(--color-primary-light)]/10">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-lg">Upload Avatar</CardTitle>
        <Button
          variant="outline"
          className="cursor-pointer"
        >
          <Send
            className="-ms-1 size-4 opacity-60"
            aria-hidden="true"
          />
          Upload
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">

        <CldUploadWidget
          uploadPreset="user_uploads"
          onSuccess={handleUploadSuccess}
        >
          {({ open }) => (
            <button onClick={() => open()}>
              Upload an Image
            </button>
          )}
        </CldUploadWidget>


      </CardContent>
    </Card>
  )
}
