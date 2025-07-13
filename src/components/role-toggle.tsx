'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export default function RoleToggle({ initialRole }: { initialRole: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [role, setRole] = useState(initialRole);

  const handleRoleToggle = (newRole: string) => {
    if (newRole) {
      setRole(newRole);
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('role', newRole);
      router.push(`?${newSearchParams.toString()}`);
    }
  };

  return (
    <ToggleGroup
      type="single"
      value={role}
      onValueChange={handleRoleToggle}
      className="inline-flex rounded-md border border-gray-200 p-1"
    >
      <ToggleGroupItem
        value="jobseeker"
        aria-label="Toggle jobseeker"
        className="px-4 py-2 text-sm font-medium rounded-md"
      >
        求职者
      </ToggleGroupItem>
      <ToggleGroupItem
        value="recruiter"
        aria-label="Toggle recruiter"
        className="px-4 py-2 text-sm font-medium rounded-md"
      >
        招聘方
      </ToggleGroupItem>
    </ToggleGroup>
  );
}