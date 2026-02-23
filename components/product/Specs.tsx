import { SpecGroup, SpecItem } from "@/lib/catalog/types";

function SpecItemView({ item, level = 0 }: { item: SpecItem; level?: number }) {
  return (
    <div className={level === 0 ? "py-2" : "py-1"}>
      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
        <div className="text-sm text-black/70">{item.label}</div>
        {item.value ? (
          <div className="text-sm text-black">{item.value}</div>
        ) : null}
      </div>

      {item.notes ? (
        <div className="mt-1 text-xs leading-5 text-black/45">{item.notes}</div>
      ) : null}

      {item.children?.length ? (
        <div className="mt-2 border-l border-black/10 pl-4">
          {item.children.map((c, idx) => (
            <SpecItemView key={`${c.label}-${idx}`} item={c} level={level + 1} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Specs({ specs }: { specs?: SpecGroup[] }) {
  if (!specs?.length) return null;

  return (
    <div className="mt-10 space-y-8">
      {specs.map((group) => (
        <section key={group.title} className="rounded-2xl border border-black/10 p-5">
          <h3 className="text-sm font-medium tracking-tight">{group.title}</h3>
          <div className="mt-3 divide-y divide-black/10">
            {group.items.map((item, idx) => (
              <SpecItemView key={`${item.label}-${idx}`} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
