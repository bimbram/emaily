function localtunnel {
  lt -s uhsduahcxrfastforest11267 --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
