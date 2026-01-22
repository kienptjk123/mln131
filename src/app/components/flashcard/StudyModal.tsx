import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cardPairs } from "@/data/cards";
import { BookOpen, X, Search, ChevronDown, ChevronRight, Hash, Clock, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "../ui/input";
import { useState, useEffect, useCallback } from "react";

interface StudyModalProps {
  open: boolean;
  onClose: () => void;
}

export function StudyModal({ open, onClose }: StudyModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  // Filter cards based on search term
  const filteredPairs = cardPairs.filter(pair => 
    pair.concept.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pair.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pair.note.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to highlight search terms
  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) => 
      regex.test(part) ? 
        <span key={index} className="bg-yellow-600 text-yellow-100 px-1 rounded">{part}</span> : 
        part
    );
  };

  const toggleCard = (pairId: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(pairId)) {
      newExpanded.delete(pairId);
    } else {
      newExpanded.add(pairId);
    }
    setExpandedCards(newExpanded);
  };

  const expandAll = useCallback(() => {
    setExpandedCards(new Set(filteredPairs.map(pair => pair.pairId)));
  }, [filteredPairs]);

  const collapseAll = useCallback(() => {
    setExpandedCards(new Set());
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        // Focus search input
        const searchInput = document.querySelector('input[placeholder*="Tìm kiếm"]') as HTMLInputElement;
        searchInput?.focus();
      } else if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        expandAll();
      } else if (e.ctrlKey && e.key === 'w') {
        e.preventDefault();
        collapseAll();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose, expandAll, collapseAll]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] p-0 bg-black border-2 border-gray-700/50">
        <DialogHeader className="p-6 pb-4 border-b border-gray-700 bg-gray-900/90 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 flex items-center justify-center shadow-lg border border-blue-500/50">
                <BookOpen className="w-6 h-6 text-blue-400 drop-shadow-sm" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Bộ sưu tập khái niệm
                </DialogTitle>
                <DialogDescription className="mt-1 text-gray-300 font-medium">
                  {filteredPairs.length} khái niệm kinh tế chính trị
                </DialogDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">{expandedCards.size} đang mở</span>
            </div>
          </div>

          {/* Search and Controls */}
          <div className="mt-4 space-y-3">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-blue-400 transition-colors" />
              <Input
                placeholder="Tìm kiếm khái niệm, định nghĩa hoặc ghi chú..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800/70 border-gray-600 focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-200 hover:bg-gray-800/90 text-white placeholder-gray-400"
              />
              {searchTerm && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearchTerm("")}
                    className="h-6 w-6 p-0 hover:bg-gray-600 text-gray-400"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={expandAll}
                  className="text-xs hover:bg-blue-900/30 hover:border-blue-500 transition-colors bg-gray-800 border-gray-600 text-gray-300"
                >
                  <ChevronDown className="w-3 h-3 mr-1" />
                  Mở tất cả ({filteredPairs.length})
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={collapseAll}
                  className="text-xs hover:bg-gray-700 hover:border-gray-500 transition-colors bg-gray-800 border-gray-600 text-gray-300"
                >
                  <ChevronRight className="w-3 h-3 mr-1" />
                  Thu gọn
                </Button>
              </div>
              {searchTerm && (
                <div className="text-xs text-gray-300 bg-blue-900/50 px-2 py-1 rounded-full">
                  {filteredPairs.length} kết quả
                </div>
              )}
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 max-h-[calc(90vh-200px)]">
          <div className="p-6 space-y-4">
            {filteredPairs.length === 0 && searchTerm ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-300 text-lg font-medium">Không tìm thấy khái niệm nào</p>
                <p className="text-gray-400 text-sm mt-1">Thử tìm kiếm với từ khóa khác hoặc</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchTerm("")}
                  className="mt-3 text-blue-400 border-blue-600 hover:bg-blue-900/30 bg-gray-800"
                >
                  Xóa bộ lọc
                </Button>
              </div>
            ) : filteredPairs.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-gray-300 text-lg font-medium">Đang tải khái niệm...</p>
              </div>
            ) : (
              filteredPairs.map((pair, index) => {
                const isExpanded = expandedCards.has(pair.pairId);
                return (
                  <div
                    key={pair.pairId}
                    className="group bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                    style={{ 
                      animation: `fadeInUp 0.4s ease-out ${index * 50}ms both`
                    }}
                  >
                    {/* Card Header - Always Visible */}
                    <div 
                      className="p-4 cursor-pointer hover:bg-gray-700/80 transition-colors duration-200"
                      onClick={() => toggleCard(pair.pairId)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-100 group-hover:text-blue-400 transition-colors duration-200">
                              {highlightText(pair.concept, searchTerm)}
                            </h3>
                            <p className="text-sm text-gray-300 mt-1 line-clamp-2">
                              {highlightText(pair.definition, searchTerm)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-xs text-gray-400">
                            <Hash className="w-3 h-3" />
                            {pair.pairId}
                          </div>
                          {isExpanded ? (
                            <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="border-t border-gray-600 bg-gradient-to-br from-gray-900/50 to-gray-800/50 animate-in slide-in-from-top-2 duration-300">
                        <div className="p-6 space-y-4">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500 shadow-sm">
                              <div className="flex items-center gap-2 mb-3">
                                <Lightbulb className="w-4 h-4 text-blue-400" />
                                <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                                  Khái niệm
                                </p>
                              </div>
                              <p className="text-sm text-gray-200 font-medium leading-relaxed">{highlightText(pair.concept, searchTerm)}</p>
                            </div>

                            <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-purple-500 shadow-sm">
                              <div className="flex items-center gap-2 mb-3">
                                <BookOpen className="w-4 h-4 text-purple-400" />
                                <p className="text-xs font-semibold text-purple-400 uppercase tracking-wide">
                                  Định nghĩa
                                </p>
                              </div>
                              <p className="text-sm text-gray-200 leading-relaxed">{highlightText(pair.definition, searchTerm)}</p>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-lg p-4 border-l-4 border-amber-500 shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <Clock className="w-4 h-4 text-amber-400" />
                              <p className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
                                Ghi chú & Giải thích
                              </p>
                            </div>
                            <p className="text-sm text-gray-300 italic leading-relaxed">{highlightText(pair.note, searchTerm)}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-gray-700 bg-gray-900/80 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-300">
                Hiển thị {filteredPairs.length} / {cardPairs.length} khái niệm
              </div>
              <div className="text-xs text-gray-400 flex items-center gap-3">
                <span>Ctrl+F: Tìm kiếm</span>
                <span>Ctrl+E: Mở tất cả</span>
                <span>Ctrl+W: Thu gọn</span>
                <span>Esc: Đóng</span>
              </div>
            </div>
            <Button onClick={onClose} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200">
              <X className="w-4 h-4 mr-2" />
              Đóng
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}