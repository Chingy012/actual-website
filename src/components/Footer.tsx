export default function Footer() {
  return (
    <footer className="mt-12 border-t">
      <div className="mx-auto max-w-6xl p-6 text-sm text-zinc-500">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <h3 className="mb-2 font-medium text-zinc-800">Shop</h3>
            <ul className="space-y-1">
              <li>Running</li>
              <li>Training</li>
              <li>Yoga</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-zinc-800">Support</h3>
            <ul className="space-y-1">
              <li>Help Center</li>
              <li>Size Guide</li>
              <li>Shipping & Returns</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-zinc-800">Company</h3>
            <ul className="space-y-1">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <p className="mt-8">© {new Date().getFullYear()} Aether Motion</p>
      </div>
    </footer>
  );
}
