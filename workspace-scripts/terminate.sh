ports=(4000 4001 4002 4004 4005 4006 4007 4008 4009 4010);
for port in \"${ports[@]}\"; do 
    pnpm exec kill-port "${port//\"}";
done