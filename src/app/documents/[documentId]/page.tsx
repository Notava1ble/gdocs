interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const documentId = (await params).documentId;
  return <div>Document Id: {documentId}</div>;
};
export default DocumentIdPage;
