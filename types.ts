export type OSStatus = 
  | "RECEBIDA" 
  | "ORCAMENTO" 
  | "AGUARDANDO_APROVACAO" 
  | "MANUTENCAO" 
  | "PRONTA" 
  | "ENTREGUE"
  | "RECUSADO";

export interface HistoricoItem {
  data: string; // ISO_DATE
  acao: string;
}

export interface ServiceOrder {
  id: string;
  token: string;
  cliente: {
    nome: string;
    whatsapp: string;
  };
  impressora: {
    modelo: string;
    serie: string;
  };
  defeito: string;
  
  // Budget details
  descricaoServico: string;
  pecasTrocadas: string;
  
  // Custom fields
  observacoesInternas?: string;
  garantia?: string;
  acessorios?: string[]; 
  
  // Deadline (Prazo)
  prazoEstimado: number; // dias
  dataLimite: string; // ISO_DATE
  
  status: OSStatus;
  valorTotal: number;
  criadaEm: string; // ISO_DATE
  entregueEm: string | null; // ISO_DATE or null
  historico: HistoricoItem[];
}

export const STATUS_LABELS: Record<OSStatus, string> = {
  RECEBIDA: "Recebida",
  ORCAMENTO: "Orçamento Enviado",
  AGUARDANDO_APROVACAO: "Aguardando Aprovação",
  MANUTENCAO: "Em Manutenção",
  PRONTA: "Pronta",
  ENTREGUE: "Entregue",
  RECUSADO: "Orçamento Recusado"
};

export const STATUS_COLORS: Record<OSStatus, string> = {
  RECEBIDA: "bg-gray-100 text-gray-800",
  ORCAMENTO: "bg-blue-100 text-blue-800",
  AGUARDANDO_APROVACAO: "bg-yellow-100 text-yellow-800",
  MANUTENCAO: "bg-purple-100 text-purple-800",
  PRONTA: "bg-green-100 text-green-800",
  ENTREGUE: "bg-slate-800 text-white",
  RECUSADO: "bg-red-100 text-red-800"
};