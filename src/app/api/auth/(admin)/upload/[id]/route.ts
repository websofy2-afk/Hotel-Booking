import dbConnect from "@/lib/dbConnect";
import Image from "@/models/admin-model/Image";


export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await dbConnect();

    const image = await Image.findById(id);

    if (!image) {
      return new Response("Image not found", { status: 404 });
    }

    return new Response(image.data, {
      headers: {
        "Content-Type": image.contentType || "image/jpeg",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("Server error", { status: 500 });
  }
}
