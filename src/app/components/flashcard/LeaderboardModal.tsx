import { useEffect, useState } from "react";
import { getLeaderboard } from "@/lib/api";
import type { LeaderboardEntry } from "@/lib/api";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trophy, Medal, Award } from "lucide-react";

interface LeaderboardModalProps {
  open: boolean;
  onClose: () => void;
}

export function LeaderboardModal({ open, onClose }: LeaderboardModalProps) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (open) {
      loadLeaderboard();
    }
  }, [open]);

  const loadLeaderboard = async () => {
    setIsLoading(true);
    try {
      const data = await getLeaderboard();
      setEntries(data);
    } finally {
      setIsLoading(false);
    }
  };

  const getRankIcon = (index: number) => {
    if (index === 0) return <Trophy className="w-6 h-6 text-yellow-400 drop-shadow-sm" />;
    if (index === 1) return <Medal className="w-6 h-6 text-gray-300 drop-shadow-sm" />;
    if (index === 2) return <Award className="w-6 h-6 text-amber-400 drop-shadow-sm" />;
    return <span className="text-sm font-bold text-white drop-shadow-sm">{index + 1}</span>;
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gray-900/95 backdrop-blur-sm border-2 border-gray-700/50">
        <DialogHeader>
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-900/50 to-orange-900/50 rounded-2xl px-6 py-3 border border-yellow-600">
              <Trophy className="w-8 h-8 text-yellow-400 animate-bounce" />
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Bảng Xếp Hạng
              </DialogTitle>
              <Trophy className="w-8 h-8 text-yellow-400 animate-bounce" />
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="h-[400px] pr-4">
          {isLoading ? (
            <div className="flex flex-col justify-center items-center h-32 gap-3">
              <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-800 border-t-blue-400"></div>
              <p className="text-gray-300 font-medium">Đang tải...</p>
            </div>
          ) : entries.length === 0 ? (
            <div className="text-center text-gray-300 py-12">
              <Trophy className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-lg font-semibold mb-2">Chưa có dữ liệu xếp hạng</p>
              <p className="text-sm">Hãy là người đầu tiên lên bảng xếp hạng!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {entries.map((entry, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] ${
                    index < 3
                      ? "bg-gradient-to-r from-yellow-900/30 via-orange-900/30 to-red-900/30 border-yellow-600 shadow-lg"
                      : "bg-gray-800/80 border-gray-600 hover:bg-gray-800"
                  }`}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                    {getRankIcon(index)}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-lg text-gray-100">{entry.name}</p>
                    {index < 3 && (
                      <p className="text-xs text-gray-400 font-medium">
                        {index === 0 ? '🥇 Vô địch' : index === 1 ? '🥈 Á quân' : '🥉 Hạng ba'}
                      </p>
                    )}
                  </div>
                  <div className="text-right bg-blue-900/50 rounded-lg px-3 py-2">
                    <p className="text-xs text-gray-400 font-semibold uppercase">Số lượt</p>
                    <p className="font-bold text-lg text-blue-400">{entry.Flip}</p>
                  </div>
                  <div className="text-right bg-green-900/50 rounded-lg px-3 py-2">
                    <p className="text-xs text-gray-400 font-semibold uppercase">Thời gian</p>
                    <p className="font-bold text-lg text-green-400">{entry.Time}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}