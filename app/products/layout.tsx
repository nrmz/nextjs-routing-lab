type ProductsLayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
  sidebar: React.ReactNode;
};

export default function ProductsLayout({
  children,
  modal,
  sidebar,
}: ProductsLayoutProps) {
return (
  <>
    {modal}
    {children}
    {sidebar}
  </>
);
}