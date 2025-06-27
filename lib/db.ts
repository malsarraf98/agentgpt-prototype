export async function updateClientTagsAndNotes(id: string, tags: string[], notes: string) {
  // Replace with your actual DB call if not using Prisma
  await prisma.client.update({
    where: { id },
    data: {
      tags,
      notes,
    },
  })
}
