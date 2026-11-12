import { Star } from "lucide-react";

export default function CampaignMark() {
  return (
    <span className="campaign-mark" aria-label="Foxconn Stars">
      <span className="campaign-mark-type">
        <span>FOXCONN</span>
        <span>STARS</span>
      </span>
      <span className="campaign-mark-star" aria-hidden="true">
        <Star size={20} strokeWidth={1.25} />
      </span>
    </span>
  );
}
